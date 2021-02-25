const { request, response } = require("express");
const express = require("express");

const app = new express();

app.all("/axios-server", (request, response) => {
  response.setHeader("Access-Control-Allow-Origin", "*");
  response.setHeader("Access-Control-Allow-Headers", "*");

  let obj = {
    name: "李智恩",
    age: 28,
  };
  response.send(JSON.stringify(obj));
});

app.listen("8000", () => {
  console.log("-------服务已启动--http://localhost:8000/axios-server");
});
