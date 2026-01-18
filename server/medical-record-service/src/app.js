const path = require("path");
require("dotenv").config({
    path: path.resolve(__dirname, "../.env")
});

const express = require("express");
const mongoose = require("mongoose");

const recordRoutes = require("./routes/record.routes");

const app = express();
app.use(express.json());

app.use("/api/records", recordRoutes);

mongoose
    .connect(process.env.MONGO_URI)
    .then(() => console.log("✅ Medical Record DB Connected"))
    .catch((err) => console.error("❌ Mongo Error:", err));

const PORT = process.env.PORT || 5003;
app.listen(PORT, () => {
    console.log(`🩻 Medical Record service running on port ${PORT}`);
});
