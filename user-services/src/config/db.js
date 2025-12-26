const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("User Service DB connected");
    } catch (error) {
        console.error("User Service DB connection error:", error);
    }
}

module.exports = connectDB;