const express = require("express");
const whatsappRoutes = require("./routes/whatsappRoutes");
const { sendWaterUsageReminder } = require("./services/twilioService");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// WhatsApp routes
app.use("/", whatsappRoutes);

// Basic route to check if the server is up and running
app.get("/", (req, res) => {
  res.status(200).json({ message: "Whatsaap-Water-Bot" });
});

// Set up a periodic reminder to be sent every 100 seconds
setInterval(
  () =>
    sendWaterUsageReminder("+917847940928")
      .then((message) => console.log("Reminder sent:", message.sid))
      .catch((err) => console.error("Error sending reminder:", err.message)),
  100 * 1000
);

// server 
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
