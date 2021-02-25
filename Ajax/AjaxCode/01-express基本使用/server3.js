const { request, response } = require("express");
const express = require("express");

const app = new express();

// 可以接收任意类型的请求
app.all("/json-server", (request, response) => {
  response.setHeader("Access-Control-Allow-Origin", "*");
  response.setHeader("Access-Control-Allow-Headers", "*");

  //数据
  const data = {
    name: "李智恩",
  };

  //对对象进行字符串转换
  let str = JSON.stringify(data);
  //设置响应体
  response.send(str);
});

app.listen("8000", () => {
  console.log("----------JSON格式数据请求已启动---http://localhost:8000/json-server");
});
