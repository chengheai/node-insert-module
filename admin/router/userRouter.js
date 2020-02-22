const express = require('express');
const router = express.Router();
const User = require('./../db/model/userModel');
router.post('/reg', (req, res) => {
  // console.log(req.body);
  let { us, ps } = req.body;
  // console.log(us);
  if (us && ps) {
    User.insertMany({ us, ps })
      .then(() => {
        // 此处不能用res ？？？
        res.send({ err: 0, msg: '注册ok' });
      })
      .catch(err => {
        console.log(err);
        res.send({ err: -2, msg: '注册失败' });
      });
  } else {
    res.send({ err: -1, msg: '参数错误' });
  }
});
router.post('/login', (req, res) => {
  let { us, ps } = req.body;
  if (!us || !ps) {
    res.send({ err: -1, msg: '参数错误' });
  }
  User.find({ us, ps })
    .then(data => {
      if (data.length > 0) {
        res.send({ err: 0, msg: '登录成功' });
      } else {
        res.send({ err: 0, msg: '登录失败' });
      }
    })
    .catch(err => {
      return res.send({ err: -1, msg: '内部错误' });
    });
});
module.exports = router;

// nodemon 更改代码自动刷新
