const express = require('express');
const axios = require('axios');

const app = express();
const PORT = process.env.PORT || 3000;

const TELEGRAM_BOT_TOKEN = '5921419214:AAHjN1Ky6czbSGmQ_V01LxCAVW_va4lyEog';
const TELEGRAM_CHAT_ID = '-4085224168';

// Function to send message to Telegram
const sendToTelegram = async (message) => {
    const url = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`;
    try {
        await axios.post(url, {
            chat_id: TELEGRAM_CHAT_ID,
            text: message,
        });
    } catch (error) {
        console.error('Error sending message to Telegram:', error);
    }
};

// Middleware to log IP addresses
app.use((req, res, next) => {
    const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    const log = `${new Date().toISOString()} - ${ip}`;
    console.log(log);
    sendToTelegram(log);
    next();
});

app.get('/', (req, res) => {
    res.send('IP Logger Server is running');
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
