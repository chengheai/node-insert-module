const express = require('express');
const app = express();
const path = require('path');
console.log(__dirname);
console.log(path.join(__dirname, './../www'));
app.use('/dist', express.static(path.join(__dirname, './../www')));
//http://localhost:3000/dist/demo.html
app.listen(3000, () => {
  console.log('start');
});
