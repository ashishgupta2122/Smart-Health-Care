const Appointment = require("../models/appointment.model");

const createAppointment = async (req, res) => {
    try {
        const { doctorId, appointmentDate, reason } = req.body;

        const appointment = await Appointment.create({
            patientId: req.user.userId,
            doctorId,
            appointmentDate,
            reason
        });

        res.status(201).json({
            success: true,
            message: "Appointment created",
            data: appointment
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

const getMyAppointments = async (req, res) => {
    try {
        const appointments = await Appointment.find({
            patientId: req.user.userId
        });

        res.status(200).json({
            success: true,
            data: appointments
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

const getDoctorAppointments = async (req, res) => {
    try {
        const appointments = await Appointment.find({
            doctorId: req.params.doctorId
        });

        res.status(200).json({
            success: true,
            data: appointments
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

module.exports = {
    createAppointment,
    getMyAppointments,
    getDoctorAppointments
};
