// pages/api/sendmail.js
import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email, message } = req.body;

    // Configure Nodemailer transporter
    const transporter = nodemailer.createTransport({
        service: process.env.EMAIL_SERVICE, // e.g., 'gmail'
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS,
        },
      });

    // Set up email data
    const mailOptions = {
      from: 'https://continuum-ten.vercel.app',
      to: 'rjyadavweb@gmail.com',
      subject: 'New Message from Contact Form',
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    };

    try {
      await transporter.sendMail(mailOptions);
      res.status(200).json({ status: 'Email sent successfully' });
    } catch (error) {
      res.status(500).json({ status: 'Error sending email', error });
    }
  } else {
    res.status(405).json({ status: 'Method Not Allowed' });
  }
}