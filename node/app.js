var createError = require('http-errors');
// 引用express库
var express = require('express');
var path = require('path');
// morgan 默认日志组件
var logger = require('morgan');
let multer = require('multer');

// 服务器搭建
var app = express();

// 客户端、管理端来的文件 分发到不同的目录
var storage = multer.diskStorage({
        destination: function(req, file, cb) {
            if (req.url.indexOf('user') != -1 || req.url.indexOf('reg') != -1) {
                cb(null, path.join(__dirname, 'public', 'upload', 'user'))
            } else if (req.url.indexOf('banner') != -1) {
                cb(null, path.join(__dirname, 'public', 'upload', 'banner'))
            } else {
                cb(null, path.join(__dirname, 'public/upload/product'))
            }
        }
    })
    // 指定上传文件的位置  分目录
let multerObj = multer({ storage });
// 中间件 允许所有格式文件上传
app.use(multerObj.any());


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// 将请求信息打印在控制台
app.use(logger('dev'));

// body-parser的配置
app.use(express.json());
// extended: false  表示使用querystring处理
app.use(express.urlencoded({ extended: false }));

// 多个资源托管 指定位置 从上往下 最上的优先级最高
app.use(express.static(path.join(__dirname, 'public', 'template')));
// '/admin' 是别名 expressjs.com.cn/starter/static-files.html
app.use('/admin', express.static(path.join(__dirname, 'public', 'admin')));
app.use(express.static(path.join(__dirname, 'public')));

// 配置接口
// 配置用户端接口
// 处理所有api的公共参数，all后面要的是一个函数
app.all('/api/*', require('./routes/api/params'));

// app.all('/api/*',(req,res)=>{
//   req.send(console.log(1)
//   )
// })

// 路由 指向对应的接口
app.use('/api/home', require('./routes/api/home'));
app.use('/api/goods', require('./routes/api/goods'));
app.use('/api/news', require('./routes/api/news'));
app.use('/api/follow', require('./routes/api/follow'));
app.use('/api/column', require('./routes/api/column'));
app.use('/api/login', require('./routes/api/login'));
app.use('/api/reg', require('./routes/api/reg'));
app.use('/api/user', require('./routes/api/user'));
app.use('/api/logout', require('./routes/api/logout'));
app.use('/api/banner', require('./routes/api/banner'));
app.use('/api/send-code', require('./routes/api/send-code'));
app.use('/api/goodcar', require('./routes/api/goodcar'));

// 管理端
app.use('/admin/banner', require('./routes/admin/banner'));

// app.use('/proxy/juhe',require('./routes/proxy/juhe'));

// 处理404
app.use(function(req, res, next) {
    next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);


    if (req.url.includes('/api')) {
        // console.log('1');
        res.send({
            err: 1,
            msg: '不存在的接口名'
        })
    } else if (req.url.includes('/admin')) {
        // console.log(2);
        res.render('error');
    } else {
        // console.log(3);
        res.sendFile(path.join(__dirname, 'public', 'template', 'index.html'));
    }

});


module.exports = app;