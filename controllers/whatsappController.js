const { sendAcknowledgment } = require("../services/twilioService");
const { storeData } = require("../services/dataService");

exports.handleWhatsappMessage = (req, res) => {
  console.log("Received request body:", req.body);

  let incomingMessage = req.body.Body;
  const incomingDate = new Date().toLocaleDateString();
  const userPhoneNumber = req.body.From; // This is the user's WhatsApp number

  if (!incomingMessage) {
    console.error("No message content found in the request");
    return res.status(400).send("No message content found");
  }

  console.log("Received message:", incomingMessage);

  // Parse the message to extract water usage
  const usageMatch = incomingMessage.match(/(\d+)/);
  if (usageMatch) {
    const usage = usageMatch[1];
    console.log("Extracted usage:", usage);

    storeData(incomingDate, usage);

    sendAcknowledgment(userPhoneNumber) // Send acknowledgment to the user's number
      .then((message) => console.log("Acknowledgment sent:", message.sid))
      .catch((err) => console.error("Error sending acknowledgment:", err));

    res.status(200).send("Data processed successfully");
  } else {
    console.log("No valid usage data found in the message");
    res.status(400).send("No valid usage data found in the message");
  }
};