const Appointment = require("../models/appointment.model");

// BOOK
exports.bookAppointment = async (req, res) => {
    try {
        const { doctorId, date, timeSlot } = req.body;

        const appointment = await Appointment.create({
            patientId: req.user.userId,
            doctorId,
            date,
            timeSlot
        });

        res.status(201).json({
            success: true,
            message: "Appointment booked",
            appointmentId: appointment._id,
            appointment
        });
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// GET MY APPOINTMENTS ✅ (THIS WAS MISSING / WRONG)
exports.getMyAppointments = async (req, res) => {
    try {
        const appointments = await Appointment.find({
            patientId: req.user.userId
        });

        res.json(appointments);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.getAppointmentById = async (req, res) => {
    try {
        const appointment = await Appointment.findById(req.params.id);

        if (!appointment) {
            return res.status(404).json({ message: "Appointment not found" });
        }

        res.json(appointment);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};


// CANCEL
exports.cancelAppointment = async (req, res) => {
    try {
        const appointment = await Appointment.findById(req.params.id);

        if (!appointment) {
            return res.status(404).json({ message: "Appointment not found" });
        }

        appointment.status = "CANCELLED";
        await appointment.save();

        res.json({
            success: true,
            message: "Appointment cancelled"
        });
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};
