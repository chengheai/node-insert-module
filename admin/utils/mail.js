'use strict';
const nodemailer = require('nodemailer');
// 创建发送邮件对象
let transporter = nodemailer.createTransport({
  host: 'smtp.qq.com', // 发送方邮箱 lib/well-know/service.json
  port: 465, // 端口
  secure: true, // true for 465, false for other ports
  auth: {
    user: '842384139@qq.com', // 发送方邮箱地址
    pass: 'mblpdksrqhbybccj', // mtp 验证码
  },
});

function send(mail, code) {
  let mailobj = {
    from: '"Fred Foo" <842385139@qq.com>',
    to: mail,
    subject: 'hello',
    text: `您的验证码是${code}`,
    // html: '<b>hello world</b>',
  };
  return new Promise((resolve, reject) => {
    transporter.sendMail(mailobj, (err, data) => {
      console.log(err);
      console.log(data);
      if (err) {
        reject();
      } else {
        resolve();
      }
    });
  });
}
module.exports = {
  send,
};
