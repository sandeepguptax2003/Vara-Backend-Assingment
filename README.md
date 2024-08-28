# WhatsApp Water Usage Bot

## Table of Contents

- [Introduction](#introduction)
- [Project Overview](#project-overview)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Workflow of Project](#workflow-of-project)
- [Video Demonstration](#video-demonstration)
- [Installation](#installation)
- [Contributing](#contributing)
- [Contact](#contact)

## Introduction

This project aims to develop a WhatsApp bot that collects and records water usage data from users. The bot sends reminders, receives water usage information, and stores it in an Excel sheet for easy analysis.

## Project Overview

The project utilizes Twilio for WhatsApp messaging and Excel for data storage. The goal is to create an efficient system for tracking water usage in a factory or similar setting, making data collection and analysis straightforward.

## Features

The implemented features include:

- Automated reminders to submit water usage data
- Processing of user-submitted water usage data
- Storage of data in an Excel spreadsheet
- Error handling for incorrect data formats
- Acknowledgment messages to users

## Technologies Used

- Node.js
- Express.js
- Twilio API for WhatsApp messaging
- xlsx library for Excel file operations
- dotenv for environment variable management

## Workflow of Project

1. **Reminder Sending**: 
   - The system sends a reminder every 5 minutes to a specified WhatsApp number.
   - Reminder message: "Please send today's Water Usage Data."

2. **User Data Submission**:
   - Users respond with their water usage data in the format "XXX liters".
   - Example: "100 liters"

3. **Data Processing**:
   - The system receives the WhatsApp message via a webhook.
   - It extracts the water usage value from the message.

4. **Data Storage**:
   - The extracted data is stored in an Excel file (water-usage.xlsx).
   - Each entry includes the date and the water usage value.

5. **User Acknowledgment**:
   - After successful data storage, the system sends an acknowledgment to the user.
   - Message: "Thank you! Your data has been recorded."

6. **Error Handling**:
   - If the user sends data in an incorrect format, the system responds with an error message.
   - Message: "Please send the water usage in the format 'XXX liters'."

## Video Demonstration

[Link]

## Installation

To set up the WhatsApp Water Usage Bot on your local machine, follow these steps:

1. **Clone the repository**:

     git clone [https://github.com/sandeepguptax2003/Vara-Backend-Assingment.git]

2. **Install dependencies**:
   
     Navigate to the project directory and run:
     npm install

4. **Set up environment variables**:
   
     Create a `.env` file in the root directory and add the following:
   
     TWILIO_ACCOUNT_SID=your_twilio_account_sid
   
     TWILIO_AUTH_TOKEN=your_twilio_auth_token
   
     TWILIO_PHONE_NUMBER=your_twilio_phone_number

Replace the placeholders with your actual Twilio credentials.

4. **Start the server**:
Run the following command:
nodemon server.js

5. **Set up Twilio Webhook**:
- Use ngrok to expose your local server: `ngrok http 3001`
- Update your Twilio WhatsApp Sandbox settings with the ngrok URL

## Contributing

We welcome contributions to improve our project! To contribute, please follow these guidelines:

1. Fork the repository and clone it to your local machine.
2. Install dependencies using `npm install`.
3. Make your changes and test them thoroughly.
4. Submit a pull request with a detailed description of your changes.

## Contact

For any queries or suggestions, please feel free to contact [Your Name/Email/Contact Information].
