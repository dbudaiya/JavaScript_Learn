/*
    解析器在调用函数每次都会向函数内部传递进一个隐含的参数
      -这个隐含的函数就是this,this指向当前的一个对象
      -这个对象我们称为函数执行的上下文对象
      根据函数调用方式的不同,this会指向不同对象*/
function fun() {
  console.log(this.name);
}
var name = "哎哎哎";
window.fun();

var obj1 = {
  name: "不不不",
  sayName: fun,
};
obj1.sayName();
