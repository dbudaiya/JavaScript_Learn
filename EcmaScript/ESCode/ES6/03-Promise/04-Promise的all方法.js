// 第一个异步函数
const pro1 = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve("------------我将被返回-----------------");
  });
});

const pro2 = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve("------------我将被打印-----------------");
  });
});

Promise.all([pro1, pro2]).then((res) => {
  console.log(res);
});
