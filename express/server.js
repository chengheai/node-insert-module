const express = require('express');
const app = express();
const bodyParser = require('body-parser');
// for x-form-wwww
// app.use(bodyParser.urlencoded({extended: false}));
//for json
app.use(bodyParser.json());
// api接口
app.get('/user/login', (req, res) => {
  // get 参数 query
  console.log(req.query);
  console.log('hello');
  let { us, ps } = req.query;
  if (us === 'alex' && ps === 123) {
    res.send({ err: 0, msg: 'ok' });
  } else {
    res.send({ err: -1, msg: 'us pass no ok' });
  }
});
app.post('/user/reg', (req, res) => {
  // 接受post 数据 消息体 请求体 req.body
  console.log(req.body);
  // express 不能直接解析消息体
  // 第三方饿插件实现
  let { us, ps } = req.body;
  if (us === 'alex' && ps === 123) {
    res.send({ err: 0, msg: 'ok' });
  } else {
    res.send({ err: -1, msg: 'us pass no ok' });
  }
});
app.listen(3000, () => {
  console.log('server start ');
});

// http://www.baidu.com/user/
