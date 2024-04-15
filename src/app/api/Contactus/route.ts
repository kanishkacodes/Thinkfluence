// pages/api/contact.ts
import nodemailer from 'nodemailer';
import { NextApiRequest, NextApiResponse } from 'next';


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    try {
      const { name, email, message } = req.body;

      const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'your_email@gmail.com', // Your Gmail email address
          pass: 'your_password' // Your Gmail password
        }
      });

      const mailOptions = {
        from: email,
        to: 'your_email@gmail.com', // Your email address to receive messages
        subject: 'New Contact Form Submission',
        text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
      };

      await transporter.sendMail(mailOptions);
      res.status(200).json({ message: 'Message sent successfully!' });
    } catch (error) {
      console.error('Error:', error);
      res.status(500).json({ message: 'Failed to send message. Please try again later.' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).json({ message: `Method ${req.method} Not Allowed` });
  }
}
