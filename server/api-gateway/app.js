const express = require("express");
const morgan = require("morgan");

const authProxy = require("./routes/auth.proxy");
const doctorProxy = require("./routes/doctor.proxy");
const appointmentProxy = require("./routes/appointment.proxy");
const recordProxy = require("./routes/record.proxy");


const app = express();

// Logger
app.use(morgan("dev"));

// Proxies
app.use("/api/auth", authProxy);
app.use("/api/doctors", doctorProxy);
app.use("/api/appointments", appointmentProxy);
app.use("/api/records", recordProxy);


// Health check
app.get("/health", (req, res) => {
    res.json({
        success: true,
        message: "API Gateway is running"
    });
});

const PORT = 4000;
app.listen(PORT, () => {
    console.log(`🚪 API Gateway running on port ${PORT}`);
});
