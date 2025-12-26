const Appointment = require("../models/appointment.model");

// BOOK
exports.bookAppointment = async (req, res) => {
    const { doctorId, date, timeSlot } = req.body;

    try {
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

// CANCEL
exports.cancelAppointment = async (req, res) => {
    const { reason } = req.body;

    try {
        const appointment = await Appointment.findById(req.params.id);
        if (!appointment) {
            return res.status(404).json({ message: "Appointment not found" });
        }

        if (appointment.status === "CANCELLED") {
            return res.status(400).json({ message: "Already cancelled" });
        }

        appointment.status = "CANCELLED";
        appointment.cancelReason = reason;
        appointment.cancelledAt = new Date();

        await appointment.save();

        res.json({
            success: true,
            message: "Appointment cancelled",
            appointmentId: appointment._id
        });
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// LIST (by user)
exports.getMyAppointments = async (req, res) => {
    const appointments = await Appointment.find({
        patientId: req.user.userId
    });
    res.json(appointments);
};
