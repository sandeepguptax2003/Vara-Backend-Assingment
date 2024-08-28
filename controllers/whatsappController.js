const { sendAcknowledgment } = require("../services/twilioService");
const { storeData } = require("../services/dataService");

// Controller to handle incoming WhatsApp messages
const handleWhatsappMessage = (req, res) => {
  // Extract the message body and current date
  const incomingMessage = req.body.Body;
  const incomingDate = new Date().toLocaleDateString();
  
  // Log the incoming message and date
  console.log("MESSAGES", incomingDate, incomingMessage);

  // Store the incoming message data in the Excel file
  storeData(incomingDate, incomingMessage);
  
  // Send acknowledgment to the user
  sendAcknowledgment(req.body.From, req.body.To)
    .then((message) => console.log("Acknowledgment sent:", message.sid))
    .catch((err) => console.error(err));
  
  // Send a 200 OK response back to Twilio
  res.sendStatus(200);
};

module.exports = { handleWhatsappMessage };
