var express = require('express');

//路由的实例
var router = express.Router();

/* GET users listing. */
//只要写后面的就可以了
router.get('/', function(req, res, next) {
  res.send('欢迎访问!');
});

module.exports = router;
