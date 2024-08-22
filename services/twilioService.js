require("dotenv").config();
const twilio = require("twilio");

const { TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN, TWILIO_PHONE_NUMBER } = process.env;
const client = new twilio(TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN);

const TWILIO_WHATSAPP_NUMBER = `whatsapp:${TWILIO_PHONE_NUMBER}`;

function sendWaterUsageReminder(to) {
  console.log(`Sending water usage reminder to ${to}`);
  return client.messages.create({
    body: "Please send today's Water Usage Data.",
    from: TWILIO_WHATSAPP_NUMBER,
    to: `whatsapp:${to}`,
  })
  .then(message => {
    console.log(`Reminder sent successfully. SID: ${message.sid}`);
    return message;
  })
  .catch(error => {
    console.error(`Failed to send reminder: ${error.message}`);
    throw error;
  });
}

function sendAcknowledgment(to) {
  console.log(`Sending acknowledgment to ${to}`);
  return client.messages.create({
    body: "Thank you! Your data has been recorded.",
    from: `whatsapp:${TWILIO_PHONE_NUMBER}`, // This should be your Twilio WhatsApp Sandbox number
    to: to, // This will be the user's WhatsApp number
  })
  .then(message => {
    console.log(`Acknowledgment sent successfully. SID: ${message.sid}`);
    return message;
  })
  .catch(error => {
    console.error(`Failed to send acknowledgment: ${error.message}`);
    throw error;
  });
}

module.exports = {
  sendWaterUsageReminder,
  sendAcknowledgment,
};