const express = require("express");
const app = express();

const authRoutes = require("./routes/auth.routes");
const userRoutes = require("./routes/user.routes");
const doctorRoutes = require("./routes/doctor.routes");
const appointmentRoutes = require("./routes/appointment.routes");
const consultationRoutes = require("./routes/consultation.routes");

app.use("/auth", authRoutes);
app.use("/users", userRoutes);
app.use("/doctors", doctorRoutes);
app.use("/appointments", appointmentRoutes);
app.use("/consultations", consultationRoutes);

module.exports = app;
