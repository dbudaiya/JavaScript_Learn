# JavaScript编程

## 函数

### 认识函数

>概念：
>函数就是把一个特定功能的一段代码==抽象==出来，使之成为程序中的一个==独立实体==，起个名字叫==函数名==。可以在同一个程序或其他程序中多次重复使用==通过函数名调用==。
>
>作用：
>
>- 使程序变得简短而清晰
>- 利于程序维护
>- 可以提高程序开发效率
>- 提高代码的重用性（复用性）

```html
	<script>
		for(var i=1;i<=10;i++){
			document.write("<h1>布袋鼠</h1></br>")
		}
	</script>
```

> 函数的语法：
> 函数声明：==无参无返回值==
> 			function print(){
> 				函数体（具体要执行的代码）；
> }
> 【注】见名思意，函数必须体现其功能
>
> 函数调用：
> 			格式：函数名（）；

```html
    <script>
      function xunhuan() {
        for (var i = 1; i <= 2; i++) {
          document.write("<h1>布袋鼠</h1></br>");
        }
	  }
	  xunhuan();
	  xunhuan();			//可以重复使用以上代码
    </script>
```

### 带参函数

> 形参：形式上的参数（跟java编程中一样的概念）==有参无返回值的函数==
> 格式：
> 			function 函数名(形参1，形参2，形参3，...){
> 				    函数体;
>    }
>
>    调用函数：
>    		 格式：函数名(实参1，实参2,实参3，....)

```html
    <script>
      function xunhuan(n) {
        for (var i = 1; i <= n; i++) {
          document.write("<h1>布袋鼠</h1></br>");
        }
      }
      xunhuan(2);
      xunhuan(3);
    </script>
```

### 封装函数

> **一个值输出不是固定方式**
>
>  封装函数步骤：
>
> - 分析不能确定的值
> - 将不确定值声明称形参
> - 函数名与形参名都得见名思议
>
> return 关键字
>
> ​			函数（有参有返回值的）：
> ​			格式：
> ​						function  函数名（形参1，形参2，形参3）{
> ​								函数体；
> ​								return 表达式；
> }
>
> return后面写什么的表达式，函数调用的结果就是return后面表达式的值
> 【注】：函数运行的时候，如果遇到return关键字，整个函数就会终止。

```html
    <script>
      function xunhuan(n) {
        for (var i = 1; i <= n; i++) {
          return i;
        }
      }
	  var h1 =xunhuan(4);
	  alert(h1);
        /* docment.write(h1)*/
    </script>

```

### arguments对象

> 【注】：每一函数内部都有一个arguments，系统内置函数
>
> ==arguments是用来储存实际传入的参数==
>
> 属性：arguments.length 输出当前里面存储的参数个数
>

```html
<script>
    function show(){
        alert(arguments.length)
    }
    show("hello",1,'a',true);
</script>
```

> 访问某一个数据：arguments[下标]；这里的下标==从零==开始

```html
    <script>
      function show(){
		  document.write(arguments[0]);
	  }
	  show("hello",1,'a',true);	  
    </script>
```

---------------------------------------------------------

`例子`：求传入个数字的和

```html
	<script>
		function sum(){
			var s=0;
			for(var i=0;i<arguments.length;i++){
				s+=arguments[i];
			}
			return s;
		}
		var rs = sum(10,20,30,10);
		document.write(rs);
	</script>
```

------------------------------------

### 函数作用域

> 定义： 作用域（scope）指的是变量存在的范围。在 ES5 的规范中，Javascript 只有两种作用域：一种是全局作用域，变量在整个程序中一直存在，所有地方都可以读取；另一种是函数作用域，变量只在函数内部存在。ES6 又新增了块级作用域，本教程不涉及。 

 ==函数外部声明==的变量就是全局变量（global variable），它可以在函数内部读取。 

```html
 <script>
      var v = 100000;		/* 全局变量 */
      function f() {
        document.write(v);
      }
      f();
 </script>
```

在JavaScript中，用`var`申明的变量实际上是有作用域的。

如果一个变量在函数体内部申明，则该变量的作用域为整个函数体，在函数体外不可引用该变量：

```html
 <script>
    function f(){
 		 var v = 1;
	}
	v // ReferenceError: v is not defined
 </script>
```

函数内部定义的变量，会在该作用域内覆盖同名全局变量。 

变量`v`同时在函数的外部和内部有定义。结果，在函数内部定义，局部变量`v`覆盖了全局变量`v`。

```html
<script>
      var v = 1;

      function f() {
        var v = 2;
        console.log(v);
      }
      f(); // 2
      document.write(v); // 1
</script>
```

注意，对于`var`命令来说，局部变量只能在函数内部声明，在其他区块中声明，一律都是全局变量。

```html
<script>
    if (true) {
 	 var x = 5;			//全局变量
	}
    console.log(x);  // 5
</script>
```



### 函数递归

常见方法循环for

```html
    <script>
		function sum(n){
			var s =0;
			for(var i= 1;i<=n;i++){
				s+=i;
			}
			return s;
		}
		var h2 =sum(100);
		document.write(h2);
	</script>
```

> 函数递归：如果大家去`面试`，面试官问你递归知识，面试官对你的要求极高`（内存管理机制）`
>
> 但公司却是明文禁止使用递归,对内存消耗太大，假设进行一亿次，就得开辟一亿个内存单元
>
> 递归：
>
> - 函数自己调用自己
> - 一般情况下有参数
> - 一般有return关键词
>
> 【注】：递归可以解决循环做的所有事情，一些循环不容易解决的事情，递归轻松解决
> 【注】：递归，都可以写出来，但不知道为什么是对的
>
> ==方法==：
>
> 1. 首先找到临界值，即无需计算，获取的值
>
>      		2. 找这一次和上一次关联关系
>      	 		3. 假设当前函数已经使用，通用自身计算上一次

```html
   <script>
      /* 虽然不让使用，但这也是一种编程思维！ */
      function sum(n) {
        if (n == 1) {
          return 1;
        }
        return sum(n - 1) + n;
      }
      document.write(sum(100));
    </script>
```



## 数组

### 认识数组

> 数组（array）是按次序排列的一组值。每个值的位置都有编号（从0开始），整个数组用方括号表示。 (引用类型)
>
> 声明数组：
>
>   1. 通过new创建数组
>
>     参数：传入任意的数据，存储到数组中
>     var arr = new Array(100,true,'a')
>
>   2. 省略new运算符创建数组
>
>   【注】：上述两种方法，传入参数只有一个，并且是数字的时候，直接声明一个等常的一个数组；
>
>   var arr = new Array(10)
>
>   3. 数组常量进行赋值。`JS一般使用中括号`
>
>   var arr= [1,2,3];

### 数组属性

> 数组的`length`属性，返回数组的成员数量。 

```html
    <script>
		['a', 'b', 'c'].length // 3
    </script>
```

> 【注】： 只要是数组，就一定有`length`属性。该属性是一个动态的值，等于键名中的最大整数加上`1` 

```html
    <script>
      var arr = ["a", "b"];
      arr.length; // 2

      arr[2] = "c";
      arr.length; // 3

      arr[9] = "d";
      arr.length; // 10

      arr[1000] = "e";
      arr.length; // 1001
    </script>
```

`例子`：使用`随机数`循环给数组每个元素赋值。

```html
    <script>
		/* Math.random() 默认随机0-9之间的数 */
		document.write(parseInt(Math.random()*100)); /* 随机0-99之间的数值 */
	</script>
```

`例子`：长度是10的数值定义方法==（arr不加下标，即对数组全部输出）==

```html
    <script>
      var arr = new Array(10);
      for (var i = 0; i < arr.length; i++) {
        arr[i] = parseInt(Math.random() * 100);
        document.write(arr[i] + ",");
      }
    </script>
```

### 数组遍历

> 在页面上将每一个数字输出

```html
<script>
      var arr = [10, 20, 9032, "budaishu", false];
      for (var i = 1; i < arr.length; i++) {
        document.write(arr[i] + "<hr>");
      }
      /*  等同于：(跟javaeach有点相似)
	  for(var i in arr){
		  document.write(arr[i]+"</hr>");
	  } */
    </script>
```

### 数组的方法

> ==栈结构==：*木盆*
> 特点：先进后出
> 结构：从同一头进，同一头出

push

> 格式：数组.push(参数1，参数2，参数3，....)
> 功能：给数组末尾添加元素

```html
    <script>
		var arr =["天津","北京","香港"];
		arr.push("深圳","北京");
		document.write(arr);	//"天津","北京","香港","深圳","北京"
	</script>
```

pop

> 格式：数组.pop()
> 参数：没有参数
> 返回值：取下一个元素，得到新的数组。（改变之前的数组）
> 功能：从数组末尾取下一个元素

```html
    <script>
		var arr =["天津","北京","香港"];
		var arr1 = arr.pop();
		alert(arr);		//"天津","北京"
		alert(arr1);	//"香港"	
	</script>
```

----------------------------------------------

> 队列结构
> 结构：从末尾进，从头部出
> 特点：先进后出
>
> push方法

shift

> 格式：数组.shift()
> 参数：没有参数
> 功能：从数组的头部取下一个元素
> 返回值：取下的元素

```html
    <script>
		var arr =["天津","北京","香港"];
		var arr1 = arr.shift();
		alert(arr);  //"北京","香港"
		alert(arr1);	//"天津"
	</script>
```

unshift

> 格式：数组.unshift(参数1,参数2，....)
> 功能：从数组头部插入元素
> 返回值：插完以后数组的长度1返回

```html
    <script>
		var arr =["天津","北京","香港"];
		var arr1 = arr.unshift("小东西");
		alert(arr);    //"小东西","天津","北京","香港"
		alert(arr1);	//4
	</script>
```

concat

> 拷贝原数组，生成新数组
> 合并数组
> 		格式：数组.concat(数组1，数组2，.....);
> 		返回值：合并成新数组，原数组不会改变

```html
    <script>
		var arr1  =["北京","天津","上海"];
		var arr2 =[10,20,30];
		var newarr = arr1.concat(arr2,"天才");
		document.write(newarr);    //北京,天津,上海,10,20,30,天才
		alert(arr1);				//北京,天津,上海
		alert(arr2);				//10,20,30
	</script>
```

slice

> 格式：数组.slice(start,end);   [start,end]
> 功能：可以基于当前数组获取指定区域的元素[start,end],提取出新数组

````html
	<script>
		var arr1  =["北京","天津","上海"];
		var arr2 = arr1.slice(1,3);    //天津,上海
		document.write(arr2);
	</script>
````

splice

> 格式：数组.splice(start,，length，数据1，数据2，......)
> 参数：
> 			start  开始截取的位置
> 			length 截取元素的长度
>
> 增加
> 删除
> 插入
> 修改

```html
    <script>
		var arr  =["北京","天津","上海"];
		var res = arr.splice(2,1,"小东西","数组简简单单");
		document.write(arr);		//上海
		alert(res);					//北京,天津,小东西,数组简简单单
	</script>
```

### 数组求平均数

> 这里讲的不详细，略......

```html

```

### 未完待续

## 字符串

> 字符串概念：所有带单引号或者双引号的都叫`字符串`
> 字符串声明：
>
>    1. 通过==new==运算符去声明字符串
>
>       var str = new String(100);
>
>       alert(str+20);                       //10020
>
>    2. ==省略==new声明字符串
>
>       var str =String(100);
>
>       alert(str+20);                       //10020
>
>    3. ==字符串==常量赋值
>
>       var str ="100";
>
>       alert(str+20);                        //10020

### 字符串方法

length

> 访问字符串中的字符
> 			字符串.length 		访问字符串中字符的个数
> 【注】中文呢UTF-8编码（三个字符表示一个汉字）
> 			GBK （两个字符表示一个汉字）
> 			在计数时都是当做一个汉字计算

```html
    <script>
		var  h1 ="我就是一个天才";
		document.write(h1.length);    //7
    </script>
```

> 访问字符串中单个字符   字符串.charAt==(下标)==    也可以字符串[下标]
> 【注】:从0开始

```html
	<script>
      var h1 = "我就是一个天才";
      document.write(h1.charAt(1));
    </script>
	//等同于
 	<script>
      var h1 = "我就是一个天才";
      document.write(h1[0]);
    </script>
```

## 面向对象编程

> 历史：面向过程的编程语言，C语言，汇编语言
> 			面向对象的编程语言，C++，java，javascript，python，go语言
>
> 掌握思维方式
> 		面向过程编程思想：只关心数学逻辑

**例子`：有一辆车60km/h,跑在一条100km的路上，多久可以跑完？？**

常规方法：==面向对象==的方法计算

```html
    <script>
      var time = 100 /60;         //很好的印证了面向过程的概念
      document.write(time);
    </script>
```

>==面向对象==编程思想：
>
>   				1. 找出实体
>   	            				2. 分析实体属性和功能
>   	                               				3. 让实体之间相互作用

**例子`：有一辆车60km/h,跑在一条100km的路上，多久可以跑完？？**

进阶方法：==面向过程==的方法

```html
    <script>
      var cars = {
        speed: 60,
        run:function (road) {
          return road.length / this.speed;
        }
      };

      var kuahai = {
        length: 1000,
      };
      var hours = cars.run(kuahai);
      document.write(hours);
    </script>
```

> 语法：
> 		类：一类具有相同特征事物的抽象概念
> 		对象：具有某一个实例，唯一性的个体
>
> 车：马车
>
> ==数据结构==：
> 		基本数据类型（只能存储单个的值）=>数组（处理批量的数据）=>对象（即能存储数组，又能存储函数）

### 构造函数封装

> 是在一种什么情况下引入的呢？？？

```html
    <script>  
      var a = new Object();
      a.name = "tina";
      a.sex ='男';
      a.showname=function(){
        document.write("我的名字是"+this.name+"</br>");
      }
      a.showsex =function(){
        document.write("我的性别是"+this.sex);
      }
      a.showname();
      a.showsex();
    </script>
```

可知我们要想在使用上面代码的属性和方法且改变常量值就得重复以上代码达到效果

**提出构造方法**

>

```html
 <script>
      function createProne(name,sex) {        //参数往在这里填入
        var obj = new Object();               //创建空对象
        obj.name = name;
        obj.sex = sex;
        obj.showname = function () {
          alert("我的名字" + this.name);
          document.write("我的性别是" + this.sex);
        }
        return obj;
      }
      var p1 = createProne("tina", "男");      //调用对象
      p1.showname();                          //调用内部方法
    </script>
```

**工厂模式**

> 条件：
>
> 1. 原料
>
> 2. 加工
>
> 3. 出厂
>
>    满足以上条件，就叫做工厂模式,以下就是

```html
 <script>
      function createProne(name,sex) {        //参数往在这里填入
        //1.原料
        var obj = new Object();               //创建空对象
        //2.加工
        obj.name = name;
        obj.sex = sex;
        obj.showname = function () {
          alert("我的名字" + this.name);
          document.write("我的性别是" + this.sex);
        }
        //3.出厂
      }
      var p1 = createProne("tina", "男");      //调用对象
      p1.showname();                          //调用内部方法
    </script>
```

**官方函数与自建函数的区别**

> 1.没有new关键词

```html
    <script>
      var arr = new Array();
      alert(typeof arr);        //object  
    </script>
```

```notepad
	>  解决方法：
	>
	>  		1. 如果我们某一个函数使用new运算符去调用
	>    		2. 自动去完成原料和出厂操作
	>
	>  ==通过new关键字调用的函数，我们把他叫做构造函数，构造函数可以构造对象==
	>
	>  **构造函数一般首字母大写**    
	>  			function Prone（）{}
```



```html
    <script>
      function createProne(name, sex) {
        //1.原料
        //var obj = new Object(); //创建空对象 
        //2.加工
        this.name = name;
        this.sex = sex;
        this.showname = function () {
          alert("我的名字" + this.name);
          document.write("我的性别是" + this.sex);
        };
        //3.出厂
        //return obj;
        //return this;
      }
      var p1 =new  createProne("tina", "男"); //注意这里得添加好new关键字
      p1.showname(); //调用内部方法
    </script>
```

> 2.自建函数创建的对象都独有自己的一套函数（喝水自带水杯，官方：共用一个水杯）
>
> ==【注】：不可改变==

```html
<script>
      var arr = new Array(10, 58, 156, 1233, 45);
      var arr1 = new Array(10, 2, 5, 56, 45);
    /* 两个不同的数组用的是同一个方法*/
      document.write(arr.push == arr1.push);        //true  
</script>
```

> 使自建函数共用一套函数

```html
    <script>
      function Prone(name, sex) {
        this.name = name;
        this.sex = sex;
      }
      Prone.prototype.showname = function () {      //prototype关键词
        alert("我的名字" + this.name);
        document.write("我的性别是" + this.sex);
      };
      var p1 = new Prone("tina", "男");
      p1.showname();

      var p2 = new Prone("tina1", "女");
      p2.showname();
    </script>
```



### 给数组添加方法

> 给数组添加方法，对数组中每个一个元素进行求和

```html
    <script>
      var arr1 = [1,2,3,4];       //数组里面不能出现空格
      arr1.sum = function () {
        var s = 0;
        for (var i = 0; i < this.length; i++) {
          s += this[i];
        }
        return s;
      }             //这里不能加引号
     alert(arr1.sum());
    </script>
```

> 上面的sum方法只对arr1有效。

```html
    <script>
      var arr1 = [1, 2, 3, 4]; //数组里面不能出现空格
      var arr2 = [3, 1, 4, 1, 5, 9, 2, 6];

      arr1.sum = function () {
        var s = 0;
        for (var i = 0; i < this.length; i++) {
          s += this[i];
        }
        return s;
      }						//这里不能加引号
      alert(arr1.sum());                //10

      /* 添加arr方法sum */
      arr2.sum = function () {
        var s = 0;
        for (var i = 0; i < this.length; i++) {
          s += this[i];
        }
        return s;
      };    				//加引号好像也没事
      alert(arr2.sum());                  //31

      /* 判断函数是否相同 */
      alert(arr1.sum == arr2.sum);              //flase  函数方法是相同的，但地址不同
    </script>
```

### prototype原型

	> pritotype 原型对象
	> 概念：在每一个函数上，都有一个原型对象prototype

```html
   <script>
      function show(){

      }
      document.write(show.prototype);			//[object Object]
    </script>
```

>一般使用在构造函数上，我们可以给构造函数的原型prototype，添加方法
>
>如果我们将方法添加到构造函数的原型prototype对象时，构造函数构造出来的对象共享原型上所有的方法

```html
    <script>
      var arr1 = [1,2,3,4];
      var arr2 = [3,1,4,1];

      Array.prototype.sum = function () {
        var s = 0;
        for (var i = 0; i < this.length; i++) {
          s += this[i];
        }
        return s;
      }

      alert(arr1.sum());			//10
      alert(arr2.sum());			//9

      alert(arr1.sum == arr2.sum);      //true
     /* 这里sum不用加括号,判断是方法，不是计算后的值 */
    </script>
```

### 多态与继承

> 面向对象：封装，继承，多态

```html

```

