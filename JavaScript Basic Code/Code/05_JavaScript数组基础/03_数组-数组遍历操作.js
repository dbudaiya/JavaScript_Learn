/* 1.定义数组*/
const A1 = ["WHISTLE", "BOOMBAYAH", "PLAYING WITH FIRE"];

//1.1 对数组进行遍历

for (var i = 0; i < A1.length; i++) {
  console.log(A1[i]);
}

//1.2 ----------------------ES6----------------------------
for (let i in A1) {
  console.log(A1[i]);
}

for (let i of A1) {
  console.log(i);
}


let arr  = ["Saab", "Volvo", "BMW"];
		// //数组遍历就是将数组中的元素全部取出来
		// console.log(arr[0])
		// console.log(arr[1])
		// console.log(arr[2])


		// //1.
		// for(let i = 0;i<arr.length;i++){
		// 	console.log(arr[i])
		// }

		/*
		2.foreach方法需要一个函数作为参数(不支持IE)	
			回调函数:由我们创建但不由我们调用
			数组中有几个元素函数就会执行几次

			参数:
				...
				1.当前遍历的元素名
				2.当前遍历的元素下标
				3.正在遍历的数组

		 */

		arr.forEach((index,keys,d)=>{
			console.log(index,keys,d)
		})
		//练习
		function Person(name,age){
			this.name = name;
			this.age = age;
		}

		var p1 = new Person("孙悟空",11);
		var p2 = new Person("猪八戒",19);
		var p3 = new Person("无能",20);
		var p4 = new Person("唐山站",18);

		var arr1 = [p1,p2,p3,p4]
		function getArrs(arr){
			//1.创建新数组
			var newArr = [];

			//2.遍历数组
			for(let i  =0;i<arr.length;i++){
				//判断年龄大于18,添加到新数组
				if(arr[i].age >18){
					newArr.push(arr[i].name)
				}
			}

			//返回返回值
			return newArr;
		}

		console.log(getArrs(arr1))