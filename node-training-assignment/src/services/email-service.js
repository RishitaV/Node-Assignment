const nodemailer = require('nodemailer');
const { getUserEmail } = require('../property/property-mongo');

async function sendEmail(userEmail) {
    try {
        const result = await getUserEmail();
        const userMail = result[0].ownerEmail;

        const transporter = nodemailer.createTransport({
            service: 'Gmail',
            auth: {
                user: process.env.USER_NAME,
                pass: process.env.PASSWORD,
            },
        });

        const mailOptions = {
            from: 'testertesting487@gmail.com',
            to: userEmail,
            subject: 'Hello, Nodemailer!',
            text: 'This is a test email sent using Nodemailer.',
        };

        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.error('Error sending email:', error);
            } else {
                console.log('Email sent:', info.response);
            }
        });
    } catch (error) {
        console.error('Error:', error);
    }
}

async function getEmailAndSendEmail() {
    try {
        const result = await getUserEmail();
        const userMail = result[0].ownerEmail;
        sendEmail(userMail);
    } catch (error) {
        console.error('Error:', error);
    }
}

module.exports = { getEmailAndSendEmail };

