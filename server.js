const express = require('express');
const cors = require('cors');
const app = express();
require('dotenv').config();
const HospitalModel = require('./backend/models/HospitalModel');
const nodemailer = require("nodemailer");
// const emailController = require('./backend/controllers/emailController');
const mongoose = require('mongoose');
const mongoURI = process.env.MONGODB_URL;
console.log(mongoURI)
mongoose.connect(mongoURI).then(() => console.log('MongoDB Connected'))
.catch(err => console.log(err));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({ origin: process.env.HOST_ADDRESS, credentials: true }));

app.get('/', (req, res) => {
    res.status(200).send('Server is running');
});

app.listen(process.env.PORT, () => {
    console.log('Server is running on port '+process.env.PORT);
});


app.post('/saveHospitalData', async (req, res) => {
    try {
        const hospitalData = req.body;
        await HospitalModel.create(hospitalData);
        res.status(200).send('Hospital data saved successfully');
    } catch (err) {
        console.error('Error saving hospital data:', err);
        res.status(500).send('Error saving hospital data');
    }
});



app.post('/sendOTP', async (req, res) => {
    const { to, subject, otp } = req.body;
    try {
        let transporter = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 587,
            secure: false,
            auth: {
                user: "shaikshoheb9k@gmail.com", // shaikshoheb01112001 Gmail address
                pass: "zalc kkbp omun rkes" // shaikshoheb01112001 Gmail password
            }
        });

        const info = await transporter.sendMail({
            from: '"Sender Name 👻" <shaikshoheb9k@gmail.com>',
            to: to,
            subject: subject,
            text: `Your OTP is: ${otp}`,
        });

        console.log("Message sent: %s", info.messageId);
        res.json(info);
    } catch (error) {
        console.error("Error sending email:", error);
        res.status(500).json({ error: "An error occurred while sending the email.", error });
    }
});


app.get('/checkMail/:email', async (req, res) => {
    const email = req.params.email;
    try {
        const result = await HospitalModel.findOne({ email });
        if (result) {
            res.status(200).json({ email: result.email, isverified: result.isverified });
        } else {
            res.status(200).json({ email: "not found", isverified: "0" });
        }
    } catch (err) {
        console.error("Error while checking the email:", err);
        res.status(500).json({ error: "Internal Server Error" });
    }
});
