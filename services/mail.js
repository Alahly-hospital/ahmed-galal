const mustache = require("mustache");
const fs = require("fs");
const path = require("path");
const nodemailer = require("nodemailer");
const smtpTransport = require("nodemailer-smtp-transport");
const { google } = require('googleapis');
require("dotenv").config()
const {news,reservation} =require("./templates")

const OAuth2 = google.auth.OAuth2;
const oauth2Client = new OAuth2(
  process.env.CLIENT_ID,
  process.env.CLIENT_SECRET,
  // process.env.HOME_PAGE,
);

oauth2Client.setCredentials({
  refresh_token:process.env.CLIENT_REFRESH_TOKEN
});


async function sendUpdateMail (arrEmails,subject){
  try {
    const accessToken =await oauth2Client.getAccessToken();
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        type: 'OAuth2',
        user: 'ahmedgalalcenter@gmail.com',
        clientId: process.env.CLIENT_ID,
        clientSecret: process.env.CLIENT_SECRET,
        refreshToken: process.env.ACCESS_TOKEN,
        accessToken: accessToken.token
      }
    });

    // arrEmails.forEach(async (element) => {
    //   const mailOptions = {
    //     from: process.env.APP_EMAIL_ADDRESS,
    //     to: element,
    //     subject: "Doctor Ahmed Galal center news !!",
    //     html: news(subject),
    //   };

    //   try {
    //     const info = await transporter.sendMail(mailOptions);
    //     console.log(`${subject} email sent to ${element}:`, info.response);
    //   } catch (error) {
    //     console.error(`Failed to send ${subject} email to ${element}:`, error);
    //   }
    // });
} catch (error) {
  console.log(error.message);
}
}
async function sendReservationMail (arr,date){
  try {
    const accessToken =await oauth2Client.getAccessToken();
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        type: 'OAuth2',
        user: 'ahmedgalalcenter@gmail.com',
        clientId: process.env.CLIENT_ID,
        clientSecret: process.env.CLIENT_SECRET,
        refreshToken: process.env.ACCESS_TOKEN,
        accessToken: accessToken.token
      }
    });
  
    const mailOptions = {
      from: process.env.APP_EMAIL_ADDRESS,
      to: email || "ahmedhpssam@gmail.com",
      subject: "Doctor Ahmed Galal center Reservation !!",
      html: reservation(date),
    };


  transporter.sendMail(mailOptions, (error, info) => {
    console.log(info.response);
    if (error) {
      console.error(`Failed to send ${subject} email:`, error);
    } else {
      console.log(`${subject} email sent:`, info.response);
    }
  });
} catch (error) {
  console.log(error.message);
}
}

sendUpdateMail("ahmedhpssam@gmail.com","2017-02-02")

module.exports = {
  sendUpdateMail,
  sendReservationMail
}