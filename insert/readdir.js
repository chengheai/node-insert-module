const fs = require('fs');
// 同步读取 在关键位置普获错误信息
// let dirs = fs.readdirSync('./');
// console.log(12121); // 读取错误将不打印
// console.log(dirs);

// 同步错误处理
try {
  let dirs = fs.readdirSync('./');
} catch (error) {
  console.log(error);
}
// 异步读取
// err错误回调优先
fs.readdir('./', (err, data) => {
  if (err) {
    console.log('读取错误');
  } else {
    console.log(data);
  }
});
