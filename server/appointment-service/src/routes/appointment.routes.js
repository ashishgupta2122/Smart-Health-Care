const express = require("express");
const router = express.Router();

const authMiddleware = require("../middlewares/auth.middleware");
const appointmentController = require("../controllers/appointment.controller");

// CREATE appointment (patient)
router.post(
    "/",
    authMiddleware,
    appointmentController.createAppointment
);

// GET my appointments (patient)
router.get(
    "/me",
    authMiddleware,
    appointmentController.getMyAppointments // ✅ PLURAL
);

// GET doctor appointments
router.get(
    "/doctor/:doctorId",
    authMiddleware,
    appointmentController.getDoctorAppointments // ✅ PLURAL
);

module.exports = router;
