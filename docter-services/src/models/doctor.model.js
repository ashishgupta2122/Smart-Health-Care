const mongoose = require("mongoose");

const doctorSchema = new mongoose.Schema(
    {
        name: { type: String, required: true },
        email: { type: String, required: true, unique: true },
        specialization: { type: String, required: true },
        experience: { type: Number, required: true },
        availability: { type: [String], default: [] },
        createdBy: { type: String, required: true }
    },
    { timestamps: true }
);

module.exports = mongoose.model("Doctor", doctorSchema);
