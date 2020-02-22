/*
1.请求网站数据
2.将数据保存本地

*/
const http = require('https'); // 有http https

const fs = require('fs');
const cheerio = require('cheerio');
let url = 'https://www.qunar.com/';
// let url = 'https://www.bilibili.com/';
// let json = 'http://nodejs.org/dist/index.json';
http
  .get(url, res => {
    // 安全判断
    // console.log(res);
    const { statusCode } = res; // 状态吗
    const contentType = res.headers['content-type']; // 文件类型
    console.log(statusCode, contentType);
    let err = null;
    if (statusCode !== 200) {
      err = new Error('请求状态错误');
    } else if (!/^text\/html/.test(contentType)) {
      // 格式类型是网页
      err = new Error('请求类型错误');
    }

    if (err) {
      console.log(err);
      res.resume(); // 重置缓存
      return false;
    }

    // 数据处理
    let resData = '';
    // 数据分段 只接受数据就会触发
    res.on('data', chunk => {
      resData += chunk.toString('utf8');
      // 数据量大，分量传输
      // console.log(chunk.toString('utf8'));
      console.log('数据传输');
    });
    res.on('end', () => {
      // fs.writeFileSync('./bili.html', resData);

      console.log('传输完毕');
      let $ = cheerio.load(resData); // 将网页的请求数据转化
      $('img').each((index, el) => {
        console.log($(el).attr('src'));
      });
    });
  })
  .on('error', err => {
    console.log('请求错误');
  });
