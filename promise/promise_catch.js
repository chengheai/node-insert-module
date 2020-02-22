const fs = require('fs');
function isEixt() {
  return new Promise((resolve, reject) => {
    fs.stat('./hh.js', err => {
      if (err) {
        reject('文件不存在');
      } else {
        resolve('文件存在');
      }
    });
  });
}
function delFile() {
  return new Promise((resolve, reject) => {
    fs.unlink('./hh.js', err => {
      if (err) {
        reject('删除失败');
      } else {
        resolve('删除成功');
      }
    });
  });
}

//  先检测，再删除
isEixt()
  .then(() => {
    console.log('isEixt 的成功处理');
    return delFile(); // return出来的是一个promise对象的话，那么下面可以直接接then
  })
  .then(() => {
    console.log('删除文件的成功处理');
    throw new Error('手动终止');
  })
  .then(() => {
    console.log('1111');
  })
  .then(() => {
    console.log('2222');
  })
  .catch(err => {
    console.log(err);
  });

// 手动终止调用
