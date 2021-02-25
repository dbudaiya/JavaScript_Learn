// 1.导入express框架
const express = require("express");

// 2.创建应用对象
const app = new express();

// 3.创建路由规则
// -request:是对请求报文的封装
// -response:对响应报文的封装
app.get("/server4", (request, response) => {
  // 3.2设置响应头,允许跨域使用
  response.setHeader("Access-Control-Allow-Origin", "*");
  // 3.2设置响应体
  //模拟网络异常,延时发送
  setTimeout(function () {
    response.send("超时请求");
  }, 3000);
});

// 4.监听端口启动服务
app.listen(8000, () => {
  console.log("-----------服务已在端口启动:http://localhost:8000/server4");
});

//手动默写出
