// node server/server.js
import express from 'express';
import bodyParser from 'body-parser';
import nodemailer from 'nodemailer';//nodemailer är ett verktyg för att skicka e-post via Node.js.
import cors from 'cors';//Middleware för att hantera CORS (Cross-Origin Resource Sharing)
import dotenv from 'dotenv';//laddar .env

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());//gör så att den kan tolka json
app.use(cors({//gör så att förfrågningar från frontend på http://localhost:5173 fungerar
  origin: 'http://localhost:5173', // tillåter requests från frontend
}));

app.post('/send-email', (req, res) => {//post request
  const { name, email, message } = req.body;//innehåller name, email och message som skickas från kontaktformuläret i frontend

  const transporter = nodemailer.createTransport({//transporter för att skicka e-post via Gmail med autentisering som hämtas från .env (EMAIL_USER och EMAIL_PASS).
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {//strukturerar email meddelandet som skickas
    from: email,
    to: 'oscarstrigerjobb@gmail.com',
    subject: 'Contact Form Submission: Oscar Striger Portfolio',
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {//skickar emailet med catch för error och svarar till klienten
    if (error) {
      console.error('Error sending email:', error);
      return res.status(500).json({ message: 'Error sending email' });
    }
    res.status(200).json({ message: 'Email sent successfully' });
  });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
