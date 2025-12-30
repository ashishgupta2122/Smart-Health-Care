// role.middleware.js
module.exports = function (roles = []) {
    return function (req, res, next) {
        if (!req.user || !req.user.role) {
            return res.status(401).json({ message: "Unauthorized" });
        }

        const userRole = req.user.role.toUpperCase();
        const allowedRoles = roles.map(r => r.toUpperCase());

        if (!allowedRoles.includes(userRole)) {
            return res.status(403).json({ message: "Access denied" });
        }

        next();
    };
};
