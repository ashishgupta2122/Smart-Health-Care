const MedicalRecord = require("../models/record.model");

// CREATE medical record (Doctor)
const createRecord = async (req, res) => {
    try {
        const { patientId, diagnosis, medications, notes } = req.body;

        const record = await MedicalRecord.create({
            patientId,
            doctorId: req.user.userId,
            diagnosis,
            medications,
            notes
        });

        res.status(201).json({
            success: true,
            message: "Medical record created",
            data: record
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

// GET my medical records (Patient)
const getMyRecords = async (req, res) => {
    try {
        const records = await MedicalRecord.find({
            patientId: req.user.userId
        });

        res.status(200).json({
            success: true,
            data: records
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

// GET records by patient (Doctor)
const getPatientRecords = async (req, res) => {
    try {
        const records = await MedicalRecord.find({
            patientId: req.params.patientId
        });

        res.status(200).json({
            success: true,
            data: records
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

module.exports = {
    createRecord,
    getMyRecords,
    getPatientRecords
};
