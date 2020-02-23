const jwt = require('jsonwebtoken');

let screat = '121212121'; // 产生token的私钥
let payload = {
  us: 111,
  ps: 222,
};
// 传送的数据
// 产生一个token
let token = jwt.sign(payload, screat); // 加密 数据 载荷 screat

console.log(token);
// 验证token的合法性
jwt.verify(token, screat, (err, data) => {
  console.log(err);
  console.log(data);
});
