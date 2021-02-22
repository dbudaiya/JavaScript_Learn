//1.普通方法手机
function Phone(brand, price) {
  this.brand = brand;
  this.price = price;
}

Phone.prototype.call = function () {
  console.log("我可以打电话");
};

// 智能手机
function SmartPhone(brand, price, color, size) {
  Phone.call(this, brand, price);
  this.color = color;
  this.size = size;
}

// 设置子集构造函数的原型
SmartPhone.prototype = new Phone();
SmartPhone.prototype.constructor = SmartPhone;

//声明子类的方法
SmartPhone.prototype.phone = function () {
  console.log("我可以拍照");
};

const cuizhi = new SmartPhone("锤子", 2499, "黑色", "6.5jjip");
console.log(cuizhi);

// 2.类继承
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  say() {
    console.log("我将被打印");
  }
}

class Son extends Person {
  constructor(name, age, userid, grade) {
    super(name, age); //Phone.call(this, name,age);
    this.userid = userid;
    this.grade = grade;
  }

  call() {
    console.log("-----------我又将被打印-------------");
  }
}

const A1 = new Son("李智恩", 28, 1118877, 99);
console.log(A1);
