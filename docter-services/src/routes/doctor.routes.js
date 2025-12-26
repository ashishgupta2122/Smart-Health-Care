const express = require("express");
const router = express.Router();

const auth = require("../middlewares/auth.middleware");
const role = require("../middlewares/role.middleware");
const {
    createDoctor,
    getDoctors
} = require("../controllers/doctor.controller");

// ADMIN only
router.post("/", auth, role(["ADMIN"]), createDoctor);

// Public / Auth optional
router.get("/", getDoctors);

module.exports = router;
