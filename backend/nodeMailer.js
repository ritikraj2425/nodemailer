const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config();

app.use(cors())
app.use(express.json());


const sendMail = require('./controller/mailer');

app.post('/sendEmail',(req,res)=>{
    const {to,subject,content} = req.body;
    sendMail(
        to,
        subject,
        content
    )

    res.send("email sent");
})


app.listen(5000, function () {
    console.log("Server is running on port 5000");
});
