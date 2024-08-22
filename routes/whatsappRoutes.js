const express = require('express');
const whatsappController = require('../controllers/whatsappController');

const router = express.Router();

router.post("/whatsapp", whatsappController.handleWhatsappMessage);

module.exports = router;