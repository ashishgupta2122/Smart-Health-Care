const Doctor = require("../models/doctor.model");

const createDoctor = async (req, res) => {
    const { name, email, specialization, experience, availability } = req.body;

    try {
        if (!name || !email || !specialization || !experience || !availability) {
            return res.status(400).json({ message: "All fields are required" });
        }

        const existingDoctor = await Doctor.findOne({ email });
        if (existingDoctor) {
            return res.status(400).json({ message: "Doctor with this email already exists" });
        }

        const doctor = new Doctor({
            name,
            email,
            specialization,
            experience,
            availability,
            createdBy: req.user.userId
        });


        await doctor.save();
        // console.log("REQ.USER =", req.user);

        res.status(201).json({
            success: true,
            message: "Doctor created successfully",
            doctorId: doctor._id,
            createdBy: doctor.createdBy,
            doctor
        });
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

const getDoctors = async (req, res) => {
    const doctors = await Doctor.find();
    res.json(doctors);
};

module.exports = { createDoctor, getDoctors };
