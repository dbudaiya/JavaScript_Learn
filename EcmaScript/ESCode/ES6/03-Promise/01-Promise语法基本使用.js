//  实例化Promise对象
const A1 = new Promise(function (resolve, reject) {
    setTimeout(function () {
      let data = "失败的结果返回";
      reject(data);
    }, 1500);
  });
  
  A1.then((res) => {
    console.log(res);
  }).catch((err) => {
    console.log(err);
  });
  