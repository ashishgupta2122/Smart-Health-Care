const PDFDocument = require("pdfkit");
const Consultation = require("../models/consultation.model");

exports.downloadPrescription = async (req, res) => {
    const consultation = await Consultation.findById(req.params.id);
    if (!consultation) return res.status(404).json({ message: "Not found" });

    if (
        req.user.role === "PATIENT" &&
        consultation.patientId !== req.user.userId
    ) {
        return res.status(403).json({ message: "Access denied" });
    }

    const doc = new PDFDocument();
    res.setHeader("Content-Type", "application/pdf");
    res.setHeader("Content-Disposition", "attachment; filename=prescription.pdf");

    doc.pipe(res);
    doc.text("Medical Prescription\n\n");
    doc.text(`Diagnosis: ${consultation.diagnosis}`);
    doc.text("\nMedicines:");
    consultation.medicines.forEach(m =>
        doc.text(`- ${m.name} ${m.dosage} (${m.duration})`)
    );
    doc.text(`\nNotes: ${consultation.notes}`);
    doc.end();
};
