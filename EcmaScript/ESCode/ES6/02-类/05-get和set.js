// 1. get和set设置(封装)
class Person {
  get name() {
    return "-------------我的name被读取-----------";
  }

  set name(oldVal) {
    console.log("----------我的name被修改------------");
  }
}

// 实例对象
const A1 = new Person();
console.log(A1.name); //-------------我的name被读取-----------

A1.name = "李智恩"; //----------我的name被修改------------
