var express = require('express');
//path 处理路径的 url querysting JSON
//path.join path.resolve
var path = require('path');
//处理收藏夹图标的
var favicon = require('serve-favicon');
//写日志的  morgan日志中间介
var logger = require('morgan');
//处理解析cookie的.  req.cookie属性存放着客户端提交过来的cookie
var cookieParser = require('cookie-parser');
//处理请求体 req.body 属性 存放请求体对象
var bodyParser = require('body-parser');
//主业路由
var index = require('./routes/index');
//用户路由
var users = require('./routes/users');
//获取app函数
var app = express();

// 设置模板存放路径
app.set('views', path.join(__dirname, 'views'));
//设置模板引擎
/* app.set('view engine', 'ejs'); 使用html模板就不能用了*/
app.set('view engine', 'html');
//使用html模板添加的配置项
app.engine('html',require('ejs').__express);

/*
* uncomment after placing your favicon in /public
* 在你把favicon图标放在public目录之后取消注释
* */
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));//没有favicon.ico的时候注释掉
//日志中间件
app.use(logger('dev'));//dev开发时候使用
//解析请求体使用两种bodyParser.json解析json/bodyParser.urlencoded解析  content-type=urlencoded
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
//处理cookie 使用 req.cookies(key,value)
app.use(cookieParser());
//静态文件服务中间介   指定了一个绝对目录的路径作为静态文件的根目录
app.use(express.static(path.join(__dirname, 'public')));

//指定我们的use路由
app.use('/', index);
app.use('/users', users);
//app.use 里可以写路由可以是get也可以是其他的
//自己加的头部
app.get('*',function (req,res) {
  /*res.setHeader('content-type','text/html;charset=utf-8');*/
    res.send('<h1>404 没有找到资源!</h1>');
});
//自己加的尾部

//请求 /users 方法
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
