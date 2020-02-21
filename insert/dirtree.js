const fs = require('fs');
fs.readdir('./../insert/', (err, dirs) => {
  for (let index = 0; index < dirs.length; index++) {
    console.log(`--${dirs[index]}`);
  }
});
fs.stat('./test01/', (err, status) => {
  if (status.isFile()) {
    console.log('文件');
  } else {
    console.log('不是文件');
  }
});
