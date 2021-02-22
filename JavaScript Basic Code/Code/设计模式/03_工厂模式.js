//工厂模式
function createPerson(name, sex) {
  var obj = new Object();
  obj.name = name;
  obj.sex = sex;
  obj.sayName = function () {
    return this.name;
  };
  return obj;
}

var p1 = createPerson("java", "男");
var p2 = createPerson("Python", "女");

//返回的都是Object 无法识别对象的类型 不知道他们是哪个对象的实例
console.log(p1, p2);
console.log(p1.sayName(), p2.sayName());

console.log(p1 instanceof Object);

//面向对象
class createPerson1 {
  constructor(name, sex) {
    this.name = name;
    this.sex = sex;
  }
}

createPerson1.prototype.sayName = function () {
  return this.name;
};

var c1 = new createPerson1("HTML", "男");
var c2 = new createPerson1("CSS", "女");

console.log(c1, c2);
console.log(c1.sayName(), c2.sayName());

console.log(c1 instanceof createPerson1);

//------------------第二种写法和注释---------------------------
const obj = {
	name: "顺悟空",
	sex: '男',
	age: 18,
	sayName: function () {
	  console.log(this.sex);
	}
  }
  obj.sayName()

  /*使用工厂模式创建对象
	  -通过该方法可以大批量的创建对象
	*/
  
  function createPerson(name, age, sex) {
	const obj = new Object();
	obj.name = name;
	obj.age = age;
	obj.sex = sex;
	obj.sayName1 = function () {
	  console.log(this.age);
	}
	//将新的对象返回
	return obj;
  }
  var newobj1 = createPerson("猪八戒", 11, "男");
  var newobj2 = createPerson("做自己", 16, "女");
  var newobj3 = createPerson("蜘蛛侠", 87, "未知");

  console.log(newobj1);
  console.log(newobj2);
  console.log(newobj3);
