const fs = require('fs');
// 创建文件
fs.writeFile('write.txt', '今天天气不错fff', err => {
  console.log(err);
});
// 写入文件
fs.appendFile('write.txt', 'hello', err => {
  console.log(err);
});
// 读取文件
fs.readFile('write.txt', (err, data) => {
  console.log(err);
  console.log(data); //<Buffer e4 bb 8a e5 a4 a9 e5 a4 a9 e6 b0 94 e4 b8 8d e9 94 99 66 66 66>
  console.log(data.toString('utf8'));
});
// 删除文件
fs.unlink('./aa.txt', err => {
  console.log(err);
});
