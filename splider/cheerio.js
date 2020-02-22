const cheerio = require('cheerio');
let $ = cheerio.load(
  '<div><p>你好</p><img src="http://www.baidu.com" alt=""/><img src="http://www.baidueee.com" alt=""/></div>',
);
// 将一组 html格式的字符串 转化为类dom，之后可以用jq查找
console.log($('img').attr('src'));
console.log($('p').text());
// 多个image
$('img').each((index, el) => {
  console.log($(el).attr('src'));
});
