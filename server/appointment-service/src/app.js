const path = require("path");
require("dotenv").config({
    path: path.resolve(__dirname, "../.env")
});

const express = require("express");
const mongoose = require("mongoose");

const appointmentRoutes = require("./routes/appointment.routes");

const app = express();
app.use(express.json());

app.use("/api/appointments", appointmentRoutes);

mongoose
    .connect(process.env.MONGO_URI)
    .then(() => console.log("✅ Appointment DB Connected"))
    .catch((err) => console.error("❌ Mongo Error:", err));

const PORT = process.env.PORT || 5002;
app.listen(PORT, () => {
    console.log(`📅 Appointment service running on port ${PORT}`);
});
