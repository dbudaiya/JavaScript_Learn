//创建一个对象
var obj = new Object();

//向对象中添加属性
obj.name = "舒心无愧";
obj.sex = "女";

//对象的属性值可以是任意的数据类型,也可以是个函数
obj.sayName = function () {
  console.log("I am Dushenyan");
};

//函数调用
obj.sayName();

/*
函数也称为对象方法
  如果一个函数作为一个对象的属性保存,那么我们称这个函数时这个对象的方法
  调用函数就是调用对象的方法
  调用函数就是调用对象的方法(Methods)*/

var budai1 = {
  name: "折射出",
  add: function () {
    console.log("方法");
  },
};

budai1.add();

/*
枚举对象中的方法
使用for ... in 语句
  -每次执行时,会将对象中的一个属性名字赋值给变量
  语法:
    for(var 变量 in 对象){
      代码块
    }*/

for (var he in budai1) {
  console.log(he);
  console.log(budai1[he]);
}
