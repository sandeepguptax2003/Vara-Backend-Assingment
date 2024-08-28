require("dotenv").config();
const twilio = require("twilio");

const { TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN, TWILIO_PHONE_NUMBER } = process.env;
const client = new twilio(TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN);

// Function to send a reminder for water usage via WhatsApp
function sendWaterUsageReminder(to) {
  return client.messages.create({
    body: "Please send today's Water Usage.",
    from: `whatsapp:${TWILIO_PHONE_NUMBER}`,
    to: `whatsapp:${to}`,
  });
}

// Function to send an acknowledgment after receiving the water usage data
function sendAcknowledgment(to, from) {
  return client.messages.create({
    body: "Thank you! Your Water Usage has been recorded, You can check Sheet for more info.",
    from: from,
    to: to,
  });
}

module.exports = {
  sendWaterUsageReminder,
  sendAcknowledgment,
};
