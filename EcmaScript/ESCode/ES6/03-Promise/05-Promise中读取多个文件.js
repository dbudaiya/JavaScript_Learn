// 1. 引入模块
const fs = require("fs");

// 2.使用node调用基本方法
fs.readFile(
  "C:/Users/DUHAI/Desktop/JavaScrippt-Learn/Less and Sass/文档/笔记.md",
  (err, data) => {
    // 如果有失败，抛出错误
    if (err) throw err;
    // console.log(data.toString());
  }
);

// 3.使用Promise对象对其进行封装
new Promise((resolve, reject) => {
  fs.readFile("../resouce/笔记.md", (err, data) => {
    if (err) reject(err);
    resolve(data);
  });
})
  .then((res) => {
    // console.log(res.toString());
    return new Promise((resolve, reject) => {
      fs.readFile("../resouce/笔记.md", (err, data) => {
        if (err) reject(err);
        // --------------????-------------:将res转化为数组结构
        resolve([res], data);
      });
    });
  }) 
  .then((res) => {
    //   console.log(res.toString());
    return new Promise((resolve, reject) => {
      fs.readFile("../resouce/笔记2.md", (err, data) => {
        if (err) reject(err);
        res.push(data);
        resolve(res);
      });
    });
  })
  .then((res) => {
    console.log(res.toString());
  });
