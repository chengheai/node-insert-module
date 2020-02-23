// 连接数据库
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/1902', { useNewUrlParser: true });
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error'));
db.once('open', function() {
  console.log('ok');
});

// schema 对象

// 创建一个和集合相关的schema对象  类似表头

var userSchema = new mongoose.Schema({
  us: { type: String, required: true },
  ps: { type: String, required: true },
  age: Number,
  sex: { type: Number, default: 0 },
});
// 将schema 对象转化为数据模型
// 默认把user变成users 【集合，复数形式】
var User = mongoose.model('user', userSchema); // 该数据对象和集合关联（集合名，schema对象）
// 操作数据库
User.insertMany({ us: 'alex', ps: '123', age: 14 })
  .then(data => {
    console.log(data);
  })
  .catch(err => {
    console.log(err);
  });
// 文档http://www.mongoosejs.net/docs/models.html
