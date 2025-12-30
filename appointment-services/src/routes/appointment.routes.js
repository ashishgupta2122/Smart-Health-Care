const express = require("express");
const router = express.Router();

const auth = require("../middlewares/appointment.middleware");

const {
    bookAppointment,
    cancelAppointment,
    getMyAppointments,
    getAppointmentById
} = require("../controllers/appointment.controller");

router.post("/", auth, bookAppointment);
router.get("/my", auth, getMyAppointments);

// 🔥 THIS LINE IS MUST
router.get("/:id", auth, getAppointmentById);

router.put("/:id/cancel", auth, cancelAppointment);

module.exports = router;
