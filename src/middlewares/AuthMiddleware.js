const jwt = require('jsonwebtoken');

module.exports = (requiredRole = null) => {
    return (req, res, next) => {
        const authHeader = req.get('Authorization');
        if (!authHeader) {
            return res.status(401).json({ message: 'Not authenticated' });
        }

        const token = authHeader.split(' ')[1];
        let decodedToken;

        try {
            decodedToken = jwt.verify(token, process.env.JWT_SECRET);
        } catch (err) {
            return res.status(401).json({ message: 'Token is invalid' });
        }

        if (!decodedToken) {
            return res.status(401).json({ message: 'Not authenticated' });
        }

        req.userId = decodedToken.userId;
        req.userRole = decodedToken.role;

        if (requiredRole && req.userRole !== requiredRole) {
            return res.status(403).json({ message: 'Forbidden: Insufficient role' });
        }

        next();
    };
};
