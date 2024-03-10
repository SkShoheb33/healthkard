const nodemailer = require("nodemailer");

const emailController = async (req, res) => {
    const { to, subject, otp } = req.body;
    try {
        let transporter = nodemailer.createTransport({
            host:"smtp.gmail.com",
            port:587,
            secure:false,
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
        res.status(500).json({ error: "An error occurred while sending the email." ,error});
    }
}

module.exports = emailController;
