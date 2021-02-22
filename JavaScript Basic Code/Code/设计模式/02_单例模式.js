/*
单例模式:
	单:单一,一个
	例:实例
	+ 一个构造函数一生只能有一个实例
		不管new多少次都只是这一个实例

	+ 应用:
		核心代码:
		let instance = null;

		function singleTon(){
			if(!instance) instance = 实例对象
			reruen instance;
		}
		 */

// 单体模式的基本结构
var SingleTon = function (name) {
  this.name = name;
  this.instance = null;
};

// 创建原型
SingleTon.prototype.getName = function () {
  return this.name;
};

// 获取实例对象
function getInstance(name) {
  if (!this.instance) this.instance = new SingleTon(name);

  return this.instance;
}

//测试单体模式的实例
var b = getInstance("bb");
var a = getInstance("aa");

// 判断
console.log(a === b);

// function createPerson(){
// 	this.name = "budai"
// }

// let instance = null;
// function singleTon(){
// 	if(!instance) instance = new createPerson()

// 	return instance;
// }

// var c1 = new createPerson();
// var c2 = new createPerson();
// console.log(c1 ===c2)

// var p1 = new singleTon();
// var p2 = new singleTon();

// console.log(p1,p2)
// console.log(p1 ===p2)
