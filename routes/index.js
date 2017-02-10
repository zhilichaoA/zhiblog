var express = require('express');
var router = express.Router();

/*
* path 指定路由
* listener 指定回调监听函数
* */
router.get('/', function(req, res, next) {
  res.render('index', { title: '小智博客' });
});

module.exports = router;
