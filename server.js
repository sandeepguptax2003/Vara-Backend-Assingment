const express = require("express");
const whatsappRoutes = require("./routes/whatsappRoutes");
const { sendWaterUsageReminder } = require("./services/twilioService");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/", whatsappRoutes);

app.get("/", (req, res) => {
  res.status(200).json({ message: "Your Whatsaap-Bot" });
});

// Set an interval to send a reminder every 5 minutes
setInterval(
  () =>
    sendWaterUsageReminder("+917847940928")
      .then((message) => console.log("Reminder sent:", message.sid))
      .catch((err) => console.error("Error sending reminder:", err.message)),
  5 * 60 * 1000
);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});