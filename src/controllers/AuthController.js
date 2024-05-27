const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../../models').User;
const Role = require('../../models').Role;
const { sequelize } = require('../../models');

exports.register = async (req, res, next) => {
    const t = await sequelize.transaction();

    try {
        const { first_name, last_name, document_type, document_number, email, phone, status, username, password, role_id } = req.body;

        const hashedPassword = await bcrypt.hash(password, 12);
        const user = await User.create({
            first_name,
            last_name,
            document_type,
            document_number,
            email,
            phone,
            status,
            username,
            password: hashedPassword,
            role_id
        }, { transaction: t });

        await t.commit();

        res.status(201).json({ message: 'User created successfully', userId: user.id });
    } catch (error) {
        if (error.name === 'SequelizeUniqueConstraintError') {
            const errors = error.errors.map(e => e.message);
            return res.status(400).json({ message: 'Validation error', errors });
        }
        next(error);
    }
};

exports.login = async (req, res, next) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ where: { email }, include: { model: Role, as: 'role' } });

        if (!user) {
            return res.status(401).json({ message: 'Email no registrado' });
        }

        if (!(await bcrypt.compare(password, user.password))) {
            return res.status(401).json({ message: 'Contraseña incorrecta' });
        }

        const token = jwt.sign(
            { userId: user.id, email: user.email, role: user.role.name },
            process.env.JWT_SECRET,
            { expiresIn: process.env.JWT_EXPIRATION }
        );

        res.json({ token, userId: user.id, role: user.role.name });
    } catch (error) {
        next(error);
    }
};

exports.getMe = async (req, res, next) => {
    try {
        const user = await User.findByPk(req.userId, {
            include: { model: Role, as: 'role' },
            attributes: { exclude: ['password'] }
        });

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        res.json(user);
    } catch (error) {
        next(error);
    }
};
