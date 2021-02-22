/*
    创建构造函数,用来创建Person对象的
      构造函数就是一个普通的函数,创建方式和普通函数没有区别
      不同的是构造函数习惯大写字母
      
    构造函数与普通函数的区别就是调用方式不同
      普通函数时直接调用,而构造函数需要使用new关键字调用
    
    构造函数执行流程:
      1.立即创建新的对象
      2.将修建对象设置为函数的this,在构造函数中可以使用this来引用修建对象
      3.逐行执行函数中的代码
      4.将修建的对象作为返回值返回

    this情况:
      1.当以函数的形式调用时,this是window
      2.当以方法的形式调用时,谁调用方法this就是谁
      3.当以构造函数的形式调用时,this就是你
    */
   function Person(name) {   //看做一个人类,与狗类区分开来
    this.name = name;
  };
  var per = new Person("小麻皮")
  console.log(per);

  /*
  使用instanceof可以检查一个对象是否是一个类的实例
    语法:
        对象 instanceof 构造函数
        
    如果是,返回true,不是返回false
  
  所有对象都是Object的后代
    所以任何对象和Object与instanceof检查都会返回true  
     
  */
  console.log(per instanceof Person);
