const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
        return res.status(401).json({ message: "Unauthorized" });
    }

    const token = authHeader.split(" ")[1];

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        console.log("🔍 DECODED JWT =>", decoded); // 🔥 PROOF LOG

        req.user = {
            userId: decoded.id,   // 🔥 MUST be decoded.id
            role: decoded.role
        };

        console.log("✅ REQ.USER =>", req.user); // 🔥 PROOF LOG

        next();
    } catch (err) {
        console.log("❌ JWT ERROR:", err.message);
        return res.status(401).json({ message: "Invalid token" });
    }
};
