const fs = require('fs');

function delfile() {
  return new Promise((resolve, reject) => {
    fs.unlink('./hh.js', err => {
      if (err) {
        reject('失败');
      } else {
        resolve('成功');
      }
    });
  });
}
delfile()
  .then(res => {
    console.log('then:', res);
  })
  .catch(err => {
    console.log('err:', err);
  });
