/*
    函数对象
    
      立即执行函数
        函数定义完,立即被执行
        立即执行函数往往只会执行一次*/
(function () {
  console.log("我是一个匿名函数!!!");
})();

//函数对象

/* 立即执行函数
             函数定义完成，立即被调用，这种函数叫做立即执行函数
             立即执行函数往往只是执行一次 */

// (function(a, b) {
//  console.log("a = " + a);
//  console.log("b = " + b);
//  console.log("a+b ="+(a + b));
// })(1, 2);
// (function(){
//  console.log("budaishu");
// })()

function fn() {
  console.log(this);
}
// fn();

let obj = {
  name: "dusheyan",
  sex: "nan",
  sayName: fn,
};

console.log(obj.sayName == fn);

obj.sayName();
