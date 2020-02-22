const express = require('express');
const db = require('./db/connect.js');
const app = express();
const bodyParser = require('body-parser');
// for x-form-wwww
app.use(bodyParser.urlencoded({ extended: false }));
//for json
app.use(bodyParser.json());
// 路由
const userRouter = require('./router/userRouter');
app.use('/user', userRouter);
app.listen(3000, () => {
  console.log('server start');
});
