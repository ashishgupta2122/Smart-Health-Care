const express = require("express");
const router = express.Router();

const auth = require("../middlewares/auth.middleware");
const role = require("../middlewares/role.middleware");

const {
    addConsultation,
    getMyHistory
} = require("../controllers/consultation.controller");

const {
    downloadPrescription
} = require("../controllers/prescription.controller");

// DOCTOR only
router.post("/", auth, role(["DOCTOR"]), addConsultation);

// PATIENT only
router.get("/my-history", auth, role(["PATIENT"]), getMyHistory);

// DOCTOR or PATIENT
router.get(
    "/:id/prescription",
    auth,
    role(["DOCTOR", "PATIENT"]),
    downloadPrescription
);

module.exports = router;
