const Consultation = require("../models/consultation.model");
const axios = require("axios");

exports.addConsultation = async (req, res) => {
    try {
        const { appointmentId, diagnosis, medicines, notes } = req.body;

        // 🔥 Fetch appointment from Appointment Service
        const response = await axios.get(
            `${process.env.APPOINTMENT_SERVICE_URL}/appointments/${appointmentId}`,
            {
                headers: {
                    "x-service-token": process.env.SERVICE_TOKEN
                }
            }
        );


        const appointment = response.data;

        if (!appointment || !appointment.patientId) {
            return res.status(404).json({ message: "Appointment not found" });
        }

        const consultation = await Consultation.create({
            appointmentId,
            patientId: appointment.patientId,   // ✅ CORRECT SOURCE
            doctorId: req.user.userId,
            diagnosis,
            medicines,
            notes
        });

        res.status(201).json({
            success: true,
            message: "Consultation added",
            consultationId: consultation._id
        });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.getMyHistory = async (req, res) => {
    try {
        const history = await Consultation.find({
            patientId: req.user.userId
        }).sort({ createdAt: -1 });

        res.json(history);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};