const mongoose = require("mongoose");

const appointmentSchema = new mongoose.Schema(
    {
        patientId: { type: String, required: true },
        doctorId: { type: String, required: true },
        date: { type: String, required: true },
        timeSlot: { type: String, required: true },

        status: {
            type: String,
            enum: ["BOOKED", "CANCELLED", "COMPLETED"],
            default: "BOOKED"
        },

        cancelReason: String,
        cancelledAt: Date
    },
    { timestamps: true }
);

module.exports = mongoose.model("Appointment", appointmentSchema);
