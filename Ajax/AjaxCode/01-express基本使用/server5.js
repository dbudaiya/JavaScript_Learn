// 1.导入express框架
const express = require("express");

// 2.创建应用对象
const app = new express();

// 3.创建路由规则
// -request:是对请求报文的封装
// -response:对响应报文的封装
app.all("/jquery-server", (request, response) => {
  // 3.2设置响应头,允许跨域使用
  response.setHeader("Access-Control-Allow-Origin", "*");
  response.setHeader("Access-Control-Allow-Headers", "*");
  // 3.2设置响应体
  //模拟网络异常,延时发送
  setTimeout(function () {
    // response.send("使用JQuery发送请求成功");
    const obj = {
      name: "李智恩",
      age: 28,
    };
    response.send(JSON.stringify(obj));
  }, 0001);
});

// 4.监听端口启动服务
app.listen(8000, () => {
  console.log(
    "-----------服务已在端口启动:http://localhost:8000/jquery-server"
  );
});

//手动默写出
