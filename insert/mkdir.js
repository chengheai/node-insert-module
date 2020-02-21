const fs = require('fs');
// mkdir 没有data参数
fs.mkdir('./test', err => {
  console.log(err);
});
// 更改
fs.rename('./test/', './test01/', err => {
  if (err) {
    console.log('更改失败');
  } else {
    console.log(err);
  }
});
// 删除
// 只能删除空文件夹
fs.rmdir('./test01/', err => {
  if (err) {
    console.log(err);
    console.log('删除失败');
  } else {
    console.log('ok');
  }
});
