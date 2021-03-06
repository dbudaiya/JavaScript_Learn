  /*
    原型 prototype
    
    所创建的每一个函数,解析器都会向函数添加一个属性prototype
        这个属性对应一个对象,这个对象就是我们所谓的原型对象
    
    如果函数作为普通函数调用,prototype没有任何作用
    当通过构造函数调用,所创建的对象中都有隐含的属性指向该构造函数的原型对象
      -指向该构造函数的原型对象时,我们可以通过__proto__来访问该属性

    原型对象就相当于一个公共的区域,所在同一类的实例都可以访问到这个原型对象
      我们可以将对象中共有的内容,统一设置到原型对象中

    我们创建构造函数,将这些对象共有的属性和方法,统一添加到构造函数的原型对象中,这样不用分别为每一个对象添加,也不会影响到全局作用域,就可以使用每一个属性和方法.
    */
   function Person() { }

   //向Person的原型中添加属性
   Person.prototype.a = 123

   var per = new Person();
   var per1 = new Person();

   //当我们访问对象的一个属性和方法时,会先在对象自身中寻找,如果有则直接使用,
   //反之,去原型对象中寻找
   console.log(per.a);
   //向per中添加a
   per.a = 345
   console.log(per.a);

   console.log(Person.prototype);
   console.log(per.__proto__ == Person.prototype);
   console.log(per.__proto__ == Person.prototype);
   //可知这是同一个类型的值,返回true

   //必须为一个构造函数
   function createPerson(name, age, sex) {
     this.name = name;
     this.age = age;
     this.sex = sex;
   }

   /*将sayName方法在全局作用域中定义
   函数定义在全局作用域中,污染全局作用域的命名空间,也很不安全
   
   function sayName() {
     console.log(this.age);
   }
   */
   //向createPerson中添加方法
   createPerson.prototype.sayName = function () {
     console.log("X稻草人");
   }

   var newobj1 = new createPerson("猪八戒", 11, "男");
   var newobj2 = new createPerson("做自己", 16, "女");
   var newobj3 = new createPerson("蜘蛛侠", 87, "未知");


   console.log(newobj1);
   console.log(newobj2);
   console.log(newobj3);
   newobj1.sayName();

   //使用in检查是否含有属性时,如果对象中没有但是原型中有,也会返回true
   console.log("name" in newobj1);

   //使用对象中hasOwnProperty来检查对象自身是否含有该属性
   //使用该方法只有当对象自身中含有属性时,才会返回true
   console.log(newobj1.hasOwnProperty("age"));

   /*
   原型对象也是对象,所以他有原型
     -我们使用一个对象的属性和方法时,现在自身中寻找
       自身中如果有,则直接使用,没有则去原型对象中寻找,
       原型中有直接使用,没有去原型中的原型中寻找,...*/
   console.log(newobj1.__proto__.hasOwnProperty("age"));