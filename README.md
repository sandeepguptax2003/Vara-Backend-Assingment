# Vara Assignment Backend

This is the backend API for the Vara Assignment. It collects water usage data via WhatsApp using Twilio, stores the data in an Excel file, and sends periodic reminders to users. The project is built with Node.js, Express, Twilio, ngrok, and XLSX for Excel file handling.

## Run Locally

### Clone the project
git clone <repository-url>

### Install dependencies
npm install

### Start the server
nodemon server.js

### Expose the server using ngrok
ngrok http 3000
Note: Make sure to update the forwarding URL in the Twilio console sandbox configuration.

### Environment Variables
To run this project, you will need to add the following environment variables to your .env file:

TWILIO_ACCOUNT_SID=<your-twilio-account-sid>
TWILIO_AUTH_TOKEN=<your-twilio-auth-token>
TWILIO_PHONE_NUMBER=<your-twilio-phone-number>

## API Reference
WHATSAPP
Receive and store water usage data
POST /whatsapp

### Services
Twilio: Used to send and receive WhatsApp messages.
XLSX: Used to manage the Excel sheets where water usage data is stored.
ngrok: Used to expose the local server to the internet for receiving WhatsApp messages.

## Tech Stack
Node.js: JavaScript runtime for server-side programming.
Express: Minimalist web framework for Node.js.
Twilio: Communication platform for sending and receiving messages.
XLSX: Library for reading and writing Excel files.
ngrok: Tool to expose the local server to the internet.
dotenv: Loads environment variables from a .env file.
