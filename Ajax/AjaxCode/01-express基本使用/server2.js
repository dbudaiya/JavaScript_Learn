const express = require("express");

const app = new express();

app.post("/server2", (request, response) => {
  //有顺序结构的
  response.setHeader("Access-Control-Allow-Origin", "*");
  response.send("Hello POST!!!");
});

app.listen("8000", () => {
  console.log("--------------服务端口已启动-http://localhost:8000/server2");
});
