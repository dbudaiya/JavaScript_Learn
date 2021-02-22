// function fn() {
// 	console.log(this.name)
// }

// //call()和apply()
// /*
// 	这两个方法是函数对象的方法,通过函数对象来调用
// 	当对函数调用call()和apply()都会调用函数执行
// 	在调用call()和apply()可以将一个对象指定为第一个参数
// 	call()参数是谁this就指向谁

//  */
// var obj  ={
// 	name:'杜审言',
// 	sayHi(){
// 		console.log(this.name)
// 	}
// }

// var obj1 = {
// 	name :'小布丁',
// 	sayHi(){
// 		console.log(this.name)
// 	}
// }
// // var arr =[]
// // fn.call()
// // fn.call(obj)
// // fn.call(arr)
// obj.sayHi.apply(obj1)

/*
			call()方法可以将实参在对象之后依次传递
			apply()方法需要将实参封装成成一个数组进行传递
		 */

function fn(a, b) {
  console.log("a = " + a);
  console.log("b = " + b);
}

var obj = {
  product: "....",
};

fn.call(obj, 1, 2);
fn.apply(obj, [2, 3]);
