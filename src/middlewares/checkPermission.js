const { User, Role, Permission } = require('../../models');

module.exports = (permissionName) => {
    return async (req, res, next) => {
        try {
            const user = await User.findByPk(req.userId, {
                include: {
                    model: Role,
                    as: 'roles',
                    include: {
                        model: Permission,
                        as: 'permissions'
                    }
                }
            });

            if (!user) {
                return res.status(401).json({ message: 'User not found' });
            }

            const hasPermission = user.roles.some(role =>
                role.permissions.some(permission => permission.name === permissionName)
            );

            if (!hasPermission) {
                return res.status(403).json({ message: 'Forbidden: Insufficient permissions' });
            }

            next();
        } catch (error) {
            next(error);
        }
    };
};
