const fs = require('fs');
fs.stat('./hh.js', (err, status) => {
  if (err) {
    console.log('文件不存在');
  } else {
    fs.unlink('./hh.js', err => {
      console.log(err);
      // fs.writeFile('./test.js')
    });
  }
});

// 异步操作需要保持一定的执行顺序
