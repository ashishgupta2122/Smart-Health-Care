const Doctor = require("../models/doctor.model");

const createDoctor = async (req, res) => {
    try {
        const { name, specialization, experience, hospital, address } = req.body;

        const doctor = await Doctor.create({
            userId: req.user.userId, // 🔥 IMPORTANT
            name,
            specialization,
            experience,
            hospital,
            address
        });

        res.status(201).json({
            success: true,
            message: "Doctor created successfully",
            data: doctor
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error creating doctor",
            error: error.message
        });
    }
};

const getAllDoctors = async (req, res) => {
    try {
        const doctors = await Doctor.find();
        res.status(200).json({
            success: true,
            data: doctors
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error fetching doctors",
            error: error.message
        });
    }
};

const getMyProfile = async (req, res) => {
    try {
        const doctor = await Doctor.findOne({ userId: req.user.userId });

        if (!doctor) {
            return res.status(404).json({
                success: false,
                message: "Doctor profile not found"
            });
        }

        // ✅ SUCCESS RESPONSE MUST BE OUTSIDE IF
        res.status(200).json({
            success: true,
            data: doctor
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

module.exports = {
    createDoctor,
    getAllDoctors,
    getMyProfile
};
