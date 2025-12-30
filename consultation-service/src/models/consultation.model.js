const mongoose = require("mongoose");

const consultationSchema = new mongoose.Schema(
    {
        patientId: { type: String, required: true },
        doctorId: { type: String, required: true },
        appointmentId: { type: String, required: true },
        diagnosis: String,
        medicines: [
            {
                name: String,
                dosage: String,
                duration: String
            }
        ],
        notes: String
    },
    { timestamps: true }
);

module.exports = mongoose.model("Consultation", consultationSchema);
