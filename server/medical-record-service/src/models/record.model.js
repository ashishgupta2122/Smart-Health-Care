const mongoose = require("mongoose");

const recordSchema = new mongoose.Schema(
    {
        patientId: {
            type: mongoose.Schema.Types.ObjectId,
            required: true
        },
        doctorId: {
            type: mongoose.Schema.Types.ObjectId,
            required: true
        },
        diagnosis: {
            type: String,
            required: true
        },
        medications: {
            type: [String],
            default: []
        },
        notes: {
            type: String
        },
        visitDate: {
            type: Date,
            default: Date.now
        }
    },
    { timestamps: true }
);

module.exports = mongoose.model("MedicalRecord", recordSchema);
