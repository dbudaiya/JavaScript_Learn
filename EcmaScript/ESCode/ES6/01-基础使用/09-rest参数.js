//ES6引入rest参数,用来获取函数的实参,用来代替arguments

/*1. ES5中获取实参的方式*/
function A1() {
  console.log(arguments);
}
A1("WHISTLE", "BOOMBAYAH", "PLAYING WITH FIRE");

/*2. rest中获取参数*/
function B2(a, ...args) {
  console.log(args);
}
B2("WHISTLE", "BOOMBAYAH", "PLAYING WITH FIRE");
