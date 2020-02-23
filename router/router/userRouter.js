var express = require('express');
var router = express.Router(); //路由实力

router.get('/add', (req, res) => {
  res.send('user add');
});
router.get('/del', (req, res) => {
  res.send('user del');
});

module.exports = router;
