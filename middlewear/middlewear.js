const express = require('express');
const app = express();

app.use('/', (req, res, next) => {
  console.log('中间件');
  let { token } = req.query;
  if (token) {
    res.send('ok');
    next(); // 是否继续往下执行
  } else {
    res.send('缺少token');
  }
});
// 两种写法一样
// app.use((req,res,next)=>{

// })
app.get('/test1', (req, res) => {
  // let { token } = req.query;
  // if (token) {
  //   res.send('ok');
  // } else {
  //   res.send('no');
  // }
});
app.get('/test2', (req, res) => {
  // let { token } = req.query;
  // if (token) {
  //   res.send('ok');
  // } else {
  //   res.send('no');
  // }
});

app.listen(3000, () => {
  console.log('server start');
});
