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


// opt section
app.post('/sendOTP', async (req, res) => {
    const { to, subject, otp } = req.body;
    try {
        
        let transporter = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 587,
            secure: false,
            auth: {
                user: "shaikshoheb9k@gmail.com",
                pass: "zalc kkbp omun rkes"
            },
            tls: {
                rejectUnauthorized: false
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



// checking for present or not
app.get('/checkMail/:email', async (req, res) => {
    const email = req.params.email;
    try {
        const result = await HospitalModel.findOne({ email });
        if (result) {
            res.status(200).json({ email: result.email, isverified: result.isverified ,hospitalId:result.hospitalId});
        } else {
            res.status(200).json({ email: "not found", isverified: "0" });
        }
    } catch (err) {
        console.error("Error while checking the email:", err);
        res.status(500).json({ error: "Internal Server Error" });
    }
});


// getting hospital details by id
app.get('/getHospitalDeatils/:hospitalId', async (req,res)=>{
    const hospitalId = req.params.hospitalId;
    try {
        const result = await HospitalModel.findOne({ hospitalId });
        if (result) {
            res.status(200).json(result.hospitalDetails);
        } else {
            res.status(200).json({ email: "not found", isverified: "0" });
        }
    } catch (err) {
        console.error("Error while checking the email:", err);
        res.status(500).json({ error: "Internal Server Error" });
    }
})

// getting hospital doctorDetails by id
app.get('/getDoctorDetails/:hospitalId', async (req,res)=>{
    const hospitalId = req.params.hospitalId;
    try {
        const result = await HospitalModel.findOne({ hospitalId });
        if (result) {
            res.status(200).json(result.doctorList);
        } else {
            res.status(200).json({ email: "not found", isverified: "0" });
        }
    } catch (err) {
        console.error("Error while checking the email:", err);
        res.status(500).json({ error: "Internal Server Error" });
    }
})

// getting hospital media Details by id
app.get('/getMediaDeatils/:hospitalId', async (req,res)=>{
    const hospitalId = req.params.hospitalId;
    try {
        const result = await HospitalModel.findOne({ hospitalId });
        if (result) {
            res.status(200).json(result.mediaDetails);
        } else {
            res.status(200).json({ email: "not found", isverified: "0" });
        }
    } catch (err) {
        console.error("Error while checking the email:", err);
        res.status(500).json({ error: "Internal Server Error" });
    }
})
// get name by id
app.get('/getName/:hospitalId', async (req,res)=>{
    const hospitalId = req.params.hospitalId;
    try {
        const result = await HospitalModel.findOne({ hospitalId });
        if (result) {
            res.status(200).send(result.hospitalDetails.hospitalLegalName);
        } else {
            res.status(200).json({ email: "not found", isverified: "0" });
        }
    } catch (err) {
        console.error("Error while checking the email:", err);
        res.status(500).json({ error: "Internal Server Error" });
    }
})


app.put('/update/:hospitalId', async (req, res) => {
    const hospitalId = req.params.hospitalId;
    const updatedData = req.body;
    console.log(Object.keys(updatedData));
    try {
        const result = await HospitalModel.findOneAndUpdate(
            { hospitalId: hospitalId }, 
            { $set: {hospitalDetails:updatedData.hospitalDetails,doctorList:updatedData.doctorList, updatedDate: new Date().toISOString() } },
            { new: true } 
        );        
        if (!result) {  
            return res.status(404).json({ message: "Hospital not found" });
        }
        res.status(200).json({ message: "Hospital updated successfully", data: result });
    } catch (error) {
        res.status(500).json({ message: "Error updating hospital", error: error.message });
    }
});
app.put('/deleteMediaDetails/:hospitalId', async (req, res) => {
    const hospitalId = req.params.hospitalId;
    const updatedData = req.body;
    console.log(updatedData);
    try {
        const result = await HospitalModel.findOneAndUpdate(
            { hospitalId: hospitalId }, 
            { $set: {mediaDetails:updatedData, updatedDate: new Date().toISOString() } },
            { new: true } 
        );        
        if (!result) {  
            return res.status(404).json({ message: "Hospital not found" });
        }
        res.status(200).json({ message: "Hospital updated successfully" });
    } catch (error) {
        res.status(500).json({ message: "Error updating hospital", error: error.message });
    }
});