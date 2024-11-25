
const express = require('express');
const bodyParser = require('body-parser'); // new line
const app = express();
const bcryptjs = require('bcryptjs');
const cors = require("cors");
const fs = require('fs');
const { xss } = require('express-xss-sanitizer');
const nodemailer = require('nodemailer');


const path = require('path');


// Serve any static files
app.use(express.static(path.join(__dirname, '../front_end/build')));





app.use(cors({
    origin: 'https://git.heroku.com/roshan1.git',  // replace with the domain of your client
    credentials: true
}));
app.use(express.json()); // for parsing application/json
app.use(bodyParser.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.post('/vente', function(req, res) {
    let transporter = nodemailer.createTransport({
        host: "smtp.office365.com", // hostname
        secure: false, // true for 465, false for other ports
        port: 587, // port for secure SMTP
        tls: {
            ciphers:'SSLv3'
        },
        auth: {
            user: 'Siar-message-service@outlook.com',
            pass: 'LeoMessi2112'
        }
    });

    let mailOptions = {
        from: 'Siar-message-service@outlook.com',
        to: 'siarradjabi@gmail.com',
        subject: 'Intérêt  achat d\'auto ' + req.body.car,
        text:'Nom: '+req.body.name+'\n'+'Téléphone: '+req.body.phoneNumber+'\n'+'Email: '+req.body.email+'\n'+ '\n\nMessage:\n' + req.body.message,
    };
    transporter.sendMail(mailOptions, function(error, info) {
        if (error) {
            console.log(error);
            res.send({ status: 'failed', message: 'Erreur! Svp, réessayer plus tard ou contactez-nous par un de nos coordonnées' });
        } else {
            console.log('Email sent: ' + info.response);
            res.send({ status: 'sent', message: 'Demande envoyée avec succès!' });
        }
    });
});



const PORT = process.env.PORT || 3000; // Use the port from the environment variables, or 3000 if there's nothing there.
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});



// Handle React routing, return all requests to React app
app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, '../front_end/build', 'index.html'));
});