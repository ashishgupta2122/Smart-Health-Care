const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/doctors", require("./routes/doctor.routes"));

module.exports = app;
