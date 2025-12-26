const express = require("express");
const router = express.Router();

const auth = require("../middlewares/appointment.middleware");
const {
    bookAppointment,
    cancelAppointment,
    getMyAppointments,
    getAppointmentById
} = require("../controllers/appointment.controller");

// 🔹 BOOK
router.post("/", auth, bookAppointment);

// 🔹 GET MY APPOINTMENTS ✅
router.get("/my", auth, getMyAppointments);

// 🔹 GET APPOINTMENT BY ID (OPTIONAL but CLEAN)
router.get("/:id", auth, getAppointmentById);

// 🔹 CANCEL
router.put("/:id/cancel", auth, cancelAppointment);

module.exports = router;
