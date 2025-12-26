const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    role: {
        type: String,
        enum: ["PATIENT", "DOCTOR", "ADMIN"],
        default: "PATIENT"
    }
});

module.exports = mongoose.model('User', userSchema);