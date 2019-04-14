const express = require('express');
const router = express.Router();
const nodemailer = require("nodemailer");
//create a server object:
const transporter = nodemailer.createTransport({
    host: "smtp.zoho.com",
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
        user: process.env.NODEMAILER_EMAILID, // your domain email address
        pass: process.env.NODEMAILER_PASSWORD // your password
    }
});
/* GET home page. */
let confirmation = (name) => {
    return `<html><head><link href="https://fonts.googleapis.com/css?family=Crimson+Text" rel="stylesheet"><style>.btn{text-decoration:none;border:1px solid #4384f5;padding:4px;border-radius:4px;color:#4384f5;font-size:large;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif}.btn:hover{background:#4384f5;color:ghostwhite;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif}</style></head><body style="font-family: 'Crimson Text', serif; text-decoration-line: none;"><table cellpadding="0" cellspacing="0" border="0" width="100%" style="background: #f5f8fa; min-width: 350px; font-size: 1px; line-height: normal;"><tr><td align="center" valign="top"><table cellpadding="0" cellspacing="0" border="0" width="750" class="table750" style="width: 100%; max-width: 750px; min-width: 350px; background: #f5f8fa;"><tr><td class="mob_pad" width="25" style="width: 25px; max-width: 25px; min-width: 25px;">&nbsp;</td><td align="center" valign="top" style="background: #ffffff;"><table cellpadding="0" cellspacing="0" border="0" width="100%" style="width: 100% !important; min-width: 100%; max-width: 100%; background: #f5f8fa;"><tr><td align="right" valign="top"><div class="top_pad" style="height: 25px; line-height: 25px; font-size: 23px;">&nbsp;</div></td></tr></table><table cellpadding="0" cellspacing="0" border="0" width="88%" style="width: 88% !important; min-width: 88%; max-width: 88%;"><tr><td align="center" valign="top"><div style="height: 40px; line-height: 40px; font-size: 38px;">&nbsp;</div> <a href="https://prudenceconsultancy.com" target="_blank" style="display: block; max-width: 192px;text-decoration: none;"><h2 style="font-size: 11px"> برودينس استشارات | Prudence Consultancy</h2> </a> <span style="color: #797979; margin-top:0px;font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;font-size: 9px">We cover all of your financial needs</span><div class="top_pad2" style="height: 25px; line-height: 48px; font-size: 46px;">&nbsp;</div></td></tr></table><table cellpadding="0" cellspacing="0" border="0" width="88%" style="width: 88% !important; min-width: 88%; max-width: 88%; text-align: left;align-items: center;"><tr><td style="align-content: left;"><div style="font-family: 'Crimson Text', serif;align-content:left;color: #5a5a5a;font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;font-size: small;text-decoration-line: none;margin-bottom: 30px;text-align: left "><p>Hi ${name},</p><p>Than you for reaching out to us, someone from our support team will contact you shortly.</p><p>If you have any quiries, please feel free to contact us on +971-50-5673469, +971-52-1611341, +971-55-9518248 or you can write to us at info@prudenceconsultancy.com</p></div></td></tr><tr><td>&nbsp;</td></tr><tr><td>&nbsp;</td></tr></table><table cellpadding="0" cellspacing="0" border="0" width="90%" style="width: 90% !important; margin-top: 20px;min-width: 90%; max-width: 90%; border-width: 1px; border-style: solid; border-color: #e8e8e8; border-bottom: none; border-left: none; border-right: none;text-align: center"><tr><td align="left" valign="top"><div style="height: 28px; line-height: 28px; font-size: 26px;">&nbsp;</div></td></tr></table><table cellpadding="0" cellspacing="0" border="0" width="88%" style="width: 88% !important; min-width: 88%; max-width: 88%;"><tr><td align="left" valign="top" style="text-align: center"><div style="height: 30px; line-height: 30px; font-size: 28px;">&nbsp;</div></td></tr></table><table cellpadding="0" cellspacing="0" border="0" width="100%" style="width: 100% !important; min-width: 100%; max-width: 100%; background: #f5f8fa;"><tbody><tr><td align="center" valign="top"><div style="margin-top:15px;text-align: center"><p face="'Source Sans Pro', sans-serif" color="#868686"> <span style="font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; color: #868686; font-size: 11px; line-height: 20px;"> Copyright &copy; Prudence consultancy, Musaffah Industrial Area, Abu Dhabi, UAE.</span></p></div></td></tr></tbody></table></td><td class="mob_pad" width="25" style="width: 25px; max-width: 25px; min-width: 25px;">&nbsp;</td></tr></table><div style="height:25px;line-height:25px;font-size:23px">&nbsp;</div></td></tr></table></body></html>`;
};

let sendDetails = (details) => {
    return `<html><head><link href="https://fonts.googleapis.com/css?family=Crimson+Text" rel="stylesheet"><style>.btn{text-decoration:none;border:1px solid #4384f5;padding:4px;border-radius:4px;color:#4384f5;font-size:large;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif}.btn:hover{background:#4384f5;color:ghostwhite;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif}</style></head><body style="font-family: 'Crimson Text', serif; text-decoration-line: none;"><table cellpadding="0" cellspacing="0" border="0" width="100%" style="background: #f5f8fa; min-width: 350px; font-size: 1px; line-height: normal;"><tr><td align="center" valign="top"><table cellpadding="0" cellspacing="0" border="0" width="750" class="table750" style="width: 100%; max-width: 750px; min-width: 350px; background: #f5f8fa;"><tr><td class="mob_pad" width="25" style="width: 25px; max-width: 25px; min-width: 25px;">&nbsp;</td><td align="center" valign="top" style="background: #ffffff;"><table cellpadding="0" cellspacing="0" border="0" width="100%" style="width: 100% !important; min-width: 100%; max-width: 100%; background: #f5f8fa;"><tr><td align="right" valign="top"><div class="top_pad" style="height: 25px; line-height: 25px; font-size: 23px;">&nbsp;</div></td></tr></table><table cellpadding="0" cellspacing="0" border="0" width="88%" style="width: 88% !important; min-width: 88%; max-width: 88%;"><tr><td align="center" valign="top"><div style="height: 40px; line-height: 40px; font-size: 38px;">&nbsp;</div> <a href="https://prudenceconsultancy.com" target="_blank" style="display: block; max-width: 192px;text-decoration: none;"><h2 style="font-size: 11px"> برودينس استشارات | Prudence Consultancy</h2> </a> <span style="color: #797979; margin-top:0px;font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;font-size: 9px">We cover all of your financial needs</span><div class="top_pad2" style="height: 25px; line-height: 48px; font-size: 46px;">&nbsp;</div></td></tr></table><table cellpadding="0" cellspacing="0" border="0" width="88%" style="width: 88% !important; min-width: 88%; max-width: 88%; text-align: left;align-items: center;"><tr><td style="align-content: left;"><div style="font-family: 'Crimson Text', serif;align-content:left;color: #5a5a5a;font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;font-size: small;text-decoration-line: none;margin-bottom: 30px;text-align: left "><p>Hi all, this lead has been generated from the website on ${new Date().toLocaleString()}</p><p><b>Name : </b> ${details.username}</p><p><b>Email : </b> ${details.email}</p><p><b>Subject : </b> ${details.subject}</p><p><b>Message : </b> ${details.message}</p></div></td></tr><tr><td>&nbsp;</td></tr><tr><td>&nbsp;</td></tr></table><table cellpadding="0" cellspacing="0" border="0" width="90%" style="width: 90% !important; margin-top: 20px;min-width: 90%; max-width: 90%; border-width: 1px; border-style: solid; border-color: #e8e8e8; border-bottom: none; border-left: none; border-right: none;text-align: center"><tr><td align="left" valign="top"><div style="height: 28px; line-height: 28px; font-size: 26px;">&nbsp;</div></td></tr></table><table cellpadding="0" cellspacing="0" border="0" width="88%" style="width: 88% !important; min-width: 88%; max-width: 88%;"><tr><td align="left" valign="top" style="text-align: center"><div style="height: 30px; line-height: 30px; font-size: 28px;">&nbsp;</div></td></tr></table><table cellpadding="0" cellspacing="0" border="0" width="100%" style="width: 100% !important; min-width: 100%; max-width: 100%; background: #f5f8fa;"><tbody><tr><td align="center" valign="top"><div style="margin-top:15px;text-align: center"><p face="'Source Sans Pro', sans-serif" color="#868686"> <span style="font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; color: #868686; font-size: 11px; line-height: 20px;"> Copyright &copy; Prudence consultancy, Musaffah Industrial Area, Abu Dhabi, UAE.</span></p></div></td></tr></tbody></table></td><td class="mob_pad" width="25" style="width: 25px; max-width: 25px; min-width: 25px;">&nbsp;</td></tr></table><div style="height:25px;line-height:25px;font-size:23px">&nbsp;</div></td></tr></table></body></html>`;
};

let sendQuote = (details) => {
    return `<html><head><link href="https://fonts.googleapis.com/css?family=Crimson+Text" rel="stylesheet"><style>.btn{text-decoration:none;border:1px solid #4384f5;padding:4px;border-radius:4px;color:#4384f5;font-size:large;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif}.btn:hover{background:#4384f5;color:ghostwhite;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif}</style></head><body style="font-family: 'Crimson Text', serif; text-decoration-line: none;"><table cellpadding="0" cellspacing="0" border="0" width="100%" style="background: #f5f8fa; min-width: 350px; font-size: 1px; line-height: normal;"><tr><td align="center" valign="top"><table cellpadding="0" cellspacing="0" border="0" width="750" class="table750" style="width: 100%; max-width: 750px; min-width: 350px; background: #f5f8fa;"><tr><td class="mob_pad" width="25" style="width: 25px; max-width: 25px; min-width: 25px;">&nbsp;</td><td align="center" valign="top" style="background: #ffffff;"><table cellpadding="0" cellspacing="0" border="0" width="100%" style="width: 100% !important; min-width: 100%; max-width: 100%; background: #f5f8fa;"><tr><td align="right" valign="top"><div class="top_pad" style="height: 25px; line-height: 25px; font-size: 23px;">&nbsp;</div></td></tr></table><table cellpadding="0" cellspacing="0" border="0" width="88%" style="width: 88% !important; min-width: 88%; max-width: 88%;"><tr><td align="center" valign="top"><div style="height: 40px; line-height: 40px; font-size: 38px;">&nbsp;</div> <a href="https://prudenceconsultancy.com" target="_blank" style="display: block; max-width: 192px;text-decoration: none;"><h2 style="font-size: 11px"> برودينس استشارات | Prudence Consultancy</h2> </a> <span style="color: #797979; margin-top:0px;font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;font-size: 9px">We cover all of your financial needs</span><div class="top_pad2" style="height: 25px; line-height: 48px; font-size: 46px;">&nbsp;</div></td></tr></table><table cellpadding="0" cellspacing="0" border="0" width="88%" style="width: 88% !important; min-width: 88%; max-width: 88%; text-align: left;align-items: center;"><tr><td style="align-content: left;"><div style="font-family: 'Crimson Text', serif;align-content:left;color: #5a5a5a;font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;font-size: small;text-decoration-line: none;margin-bottom: 30px;text-align: left "><p>Hi all, this lead has been generated from the website on ${new Date().toLocaleString()}</p><p><b>Name : </b> ${details.username}</p><p><b>Email : </b> ${details.email}</p><p><b>Mobile : </b> ${details.mobile}</p><p><b>Message : </b> ${details.message}</p></div></td></tr><tr><td>&nbsp;</td></tr><tr><td>&nbsp;</td></tr></table><table cellpadding="0" cellspacing="0" border="0" width="90%" style="width: 90% !important; margin-top: 20px;min-width: 90%; max-width: 90%; border-width: 1px; border-style: solid; border-color: #e8e8e8; border-bottom: none; border-left: none; border-right: none;text-align: center"><tr><td align="left" valign="top"><div style="height: 28px; line-height: 28px; font-size: 26px;">&nbsp;</div></td></tr></table><table cellpadding="0" cellspacing="0" border="0" width="88%" style="width: 88% !important; min-width: 88%; max-width: 88%;"><tr><td align="left" valign="top" style="text-align: center"><div style="height: 30px; line-height: 30px; font-size: 28px;">&nbsp;</div></td></tr></table><table cellpadding="0" cellspacing="0" border="0" width="100%" style="width: 100% !important; min-width: 100%; max-width: 100%; background: #f5f8fa;"><tbody><tr><td align="center" valign="top"><div style="margin-top:15px;text-align: center"><p face="'Source Sans Pro', sans-serif" color="#868686"> <span style="font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; color: #868686; font-size: 11px; line-height: 20px;"> Copyright &copy; Prudence consultancy, Musaffah Industrial Area, Abu Dhabi, UAE.</span></p></div></td></tr></tbody></table></td><td class="mob_pad" width="25" style="width: 25px; max-width: 25px; min-width: 25px;">&nbsp;</td></tr></table><div style="height:25px;line-height:25px;font-size:23px">&nbsp;</div></td></tr></table></body></html>`;
};

router.get('/', function(req, res, next) {
    res.render('index');
});

router.get('/about', function (req, res, next) {
    res.render('about');
});

router.get('/services', function (req, res, next) {
    res.render('services');
});

router.get('/contact-us', function (req, res, next) {
    res.render('contactUs');
});

const sendConfrimation = (to, name) =>{
    const mailOptions = {
        from: 'no-reply@prudenceconsultancy.com',
        to: to,
        subject: "Prudence consultancy automatic generated mail",
        html: confirmation(name)
    };
    transporter.sendMail(mailOptions, function(err, info) {
        if (err) {
            console.log(err, "Error in replying");
        } else {
            console.log("Email replied");
        }
    });
}

router.post('/submit-form', function (req, res, next) {
   const details = req.body;
   if(details){
       const mailOptions = {
           from: 'no-reply@prudenceconsultancy.com',
           to: process.env.testmail || "info@prudenceconsultancy.com",
           subject: "Enquiry from website",
           html: sendDetails(details)
       };
       transporter.sendMail(mailOptions, function(err, info) {
           if (err) {
               console.log(err, "Error sending email");
           } else {
               sendConfrimation(details.email, details.username[0].toUpperCase() + details.username.slice(1,));
               console.log("Email sent");
           }
       });
       return res.send(true);
   }else{
       return res.send(false);
   }
});
router.post('/submit-quote-request', function (req, res, next) {
    const details = req.body;
    if(details){
        const mailOptions = {
            from: 'admin@prudenceconsultancy.com',
            to: process.env.testmail || "info@prudenceconsultancy.com",
            subject: "Enquiry about quotation from website",
            html: sendQuote(details)
        };
        transporter.sendMail(mailOptions, function(err, info) {
            if (err) {
                console.log(err, "Error sending email");
            } else {
                sendConfrimation(details.email, details.username[0].toUpperCase() + details.username.slice(1,));
                console.log("Email sent");
            }
        });
        return res.send(true);
    }else{
        return res.send(false);
    }
});

module.exports = router;
