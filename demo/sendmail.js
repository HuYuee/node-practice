"use strict";

// 发送邮件示例

const nodemailer = require("nodemailer");

var account = {
  user: "hy1062887235@163.com",
  pass: ""
};
let transporter = nodemailer.createTransport({
  host: "smtp.163.com",
  port: 465,
  secure: true, // true for 465, false for other ports
  auth: {
    user: account.user,
    pass: account.pass
  }
});
let mailOptions = {
  from: '"Fred Foo 👻" <hy1062887235@163.com>', // sender address
  to: "hy1062887235@163.com", // list of receivers
  subject: "自动发送邮件助手-古朋", // Subject line
  text: "Hello world?", // plain text body
  html: "<b>Hello world?</b>" // html body
};

// send mail with defined transport object
transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    return console.log(error);
  } else {
    console.log("Message sent: %s", info.response);
    // Preview only available when sending through an Ethereal account
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));

    // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@blurdybloop.com>
    // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
  }
  transporter.close();
});
