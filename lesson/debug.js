//var debug = require('debug')('zhiblog:server');
//debug  是一个日志记录器,用于向控制台输出日志
var debug = require('debug');
console.log('hello');//执行就会输出
var server_debug=debug("zhiBlog:server");
var client_debug=debug("zhiBlog:client");
//错误日志
var error_debug=debug("zhiBlog:error");
error_debug('error');//查询DEBUG的值
//警告日志
var warn_debug=debug("zhiBlog:warn");
warn_debug('warn')
//调试测试   开发的时候需要
var log_debug=debug("zhiBlog:log");
log_debug('log')
/*
命令行操作
SET DEBUG=zhiBlog:*
node debug.js

得到结果
 hello
 zhiBlog:error error +0ms
 zhiBlog:warn warn +3ms
 zhiBlog:log log +1ms


修改
 SET DEBUG=zhiBlog:log
 node debug.js

 结果
 hello
 zhiBlog:log log +0ms
*/

// debug在调试输出越多越好,在线上越少越好