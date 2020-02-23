### 跨域问题

ajax 同源策略 协议 主机(ip,域名) 端口号

1. 协议，端口
2. cors
3. jsonp
4. 服务器

<!--
const express = require('express')
const cors = require('cors');

app.use(cors())
 -->

<!--
app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With,Content-Type");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    next();
});

 -->
