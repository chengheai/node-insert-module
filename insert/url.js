const url = require('url');
let currurl = 'https://mp.weixin.qq.com/wxamp/wacodepage/getcodepage?token=868777012&lang=zh_CN';
console.log(url.parse(currurl));
// url.parse 将url字符串转成对象
// url.format 将url对象转成字符串
