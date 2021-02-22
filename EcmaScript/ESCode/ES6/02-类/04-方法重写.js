// 1.类继承
class Person {
  // 构造方法
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  // 父类的成员属性
  say() {
    return "我将在父类中被打印";
  }
}

class Son extends Person {
  //   构造方法
  constructor(name, age, userid, grade) {
    super(name, age); //Phone.call(this, name,age);
    this.userid = userid;
    this.grade = grade;
  }

  call() {
    console.log("-----------我又将被打印-------------");
  }

  //   重写
  say() {
    return "我将在子类中被打印";
  }
}

const A1 = new Son("李智恩", 28, 1118877, 99);
// 在子类中调用重写的方法
console.log(A1.say());
