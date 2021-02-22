// 1.arguments基本使用 :arguments类数组对象(在函数当中)
function A1() {
  console.log(arguments);
}

A1("李智恩", "IU", 28);
/*在调用函数时,浏览器都会传递两个隐含的对象
		1.函数的上下文对象 :this
		2.arguments类函数对象用于封装,保存实参对象
			arguments.isArray()
			arguments instanceof Array

		返回实参长度 arguments.length
		引用实参中的属性 arguments[1]

		即使不定义形参,我们也能知道实参的情况,

		arguments属性 :callee
			这个属性对应的是一个对象,就是this指向的函数对象
		 */

function fnA() {
  console.log(arguments instanceof Array);
  // console.log(Array.isArray(arguments))
  console.log(arguments);
  console.log(arguments.length);
  console.log(arguments[1]);
  console.log(arguments.callee());
}
fnA("李智恩", "IU", 28);
