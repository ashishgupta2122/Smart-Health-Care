const path = require("path");
require("dotenv").config({
    path: path.resolve(__dirname, "../.env")
});

const express = require("express");
const mongoose = require("mongoose");

const doctorRoutes = require("./routes/doctor.routes");

const app = express();

app.use(express.json());

app.use("/api/doctors", doctorRoutes);

mongoose
    .connect(process.env.MONGO_URI)
    .then(() => console.log("✅ Doctor DB Connected"))
    .catch((err) => console.error("❌ Mongo Error:", err));

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
    console.log(`🩺 Doctor service running on port ${PORT}`);
});
