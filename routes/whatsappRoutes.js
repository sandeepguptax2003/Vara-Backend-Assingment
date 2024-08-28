const { Router } = require("express");
const { handleWhatsappMessage } = require("../controllers/whatsappController");

const router = Router();

// Route to handle incoming POST requests from WhatsApp
router.post("/whatsapp", handleWhatsappMessage);

module.exports = router;
