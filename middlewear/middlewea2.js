const express = require('express');
const app = express();

// app.use('/', (req, res, next) => {
//   console.log('中间件');
//   let { token } = req.query;
//   if (token) {
//     res.send('ok');
//     next(); // 是否继续往下执行
//   } else {
//     res.send('缺少token');
//   }
// });
// 局部中间件写法
app.get(
  '/test1',
  (req, res, next) => {
    console.log('1');
  },
  (req, res) => {
    console.log('2');
    res.send('test1');
  },
);

app.listen(3000, () => {
  console.log('server start');
});
