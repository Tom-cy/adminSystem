// 引入express
var express = require("express")

// 搭建服务器
var app = express();

// 引入配置函数
var conf = require("./src/modules/conf/index");
// 使用配置路由进行配置
var router = require("./src/modules/router/talk_with");

conf(app);
app.use(router);

// 引入socket配置
var socket = require("./src/modules/socket/index")
// 执行socket
var server = socket(app)


console.log("服务器开启成功")
// 监听conf
server.listen(4444);