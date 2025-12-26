exports.getProfile = (req, res) => {
    res.json({
        success: true,
        userId: req.user.userId,
        role: req.user.role
    });
};
