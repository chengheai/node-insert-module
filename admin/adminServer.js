const express = require('express');
const db = require('./db/connect.js');
const app = express();
const Mail = require('./utils/mail.js');
const bodyParser = require('body-parser');
const request = require('request');
// for x-form-wwww
app.use(bodyParser.urlencoded({ extended: false }));
//for json
app.use(bodyParser.json());

// 路由
const userRouter = require('./router/userRouter');
app.use('/user', userRouter);

app.post('/getMailCode', (req, res) => {
  console.log(req.body);
  let { mail } = req.body;
  let code = parseInt(Math.random() * 10000);
  Mail.send(mail, code)
    .then(() => {
      res.send({ err: 0, msg: '验证码发送ok' });
    })
    .catch(err => {
      res.send({ err: 0, msg: '验证码发送fail' });
    });
});
// 接cors
app.get('/cors', (req, res) => {
  // 发送一个服务器请求
  console.log('cors.html的ajax');
  request('http://www.google.com/xxx', (err, response, body) => {
    console.log(body);
    if (!err) {
      res.send(body);
    } else {
      console.log(err);
    }
  });
});
app.listen(3000, () => {
  console.log('server start');
});
