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
// 邮件信息
let mailobj = {
  from: '"Fred Foo" <842385139@qq.com>',
  to: '842385139@qq.com',
  subject: 'hello',
  text: 'hello world',
  // html: '<b>hello world</b>',
};
// 发送邮件 错误回调
transporter.sendMail(mailobj, (err, data) => {
  console.log(err);
  console.log(data);
});
// 定时发送
setInterval(() => {
  transporter.sendMail(mailobj);
}, 1000);
