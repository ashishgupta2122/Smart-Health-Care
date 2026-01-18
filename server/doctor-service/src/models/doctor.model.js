const mongoose = require("mongoose");

const doctorSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    specialization: {
        type: String,
        required: true
    },
    experience: {
        type: Number,
        required: true
    },
    hospital: {
        type: String
    },
    address: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model("Doctor", doctorSchema);
