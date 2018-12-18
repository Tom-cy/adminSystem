// 当前模块用于配置APP  向外暴露函数 该函数接收一个参数就是APP
// 引入bodyParser 
var bodyParser = require("body-parser");
// // 引入session

// // session持久化 - -  connect-mongo插件


var express = require("express");

function conf(app) {
    // 配置bodyparser
    app.use(bodyParser.urlencoded({
        extended: false
    }));
    // 配置session
   


    // 配置模板引擎-- 之前用的是ejs模板 ，需要下载！不需要配置    
    //express可以和多个模板进行搭配，但不配置模板引擎时，它会通过后缀名去识别，如果不写后缀名-----app.set--接下来render时候省略后缀名
    app.set("view engine", "ejs");


    // 静态服务器
    app.use("/face/", express.static("./face"))
}

// 向外暴露
module.exports = conf;