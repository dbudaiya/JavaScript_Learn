/*
    Object 对象
          -Object是引用数据类型

        值和值之间没有任何联系
        如果使用基本数据类型,所创建的变量都是独立的,不能成为整体
        
        对象属于一种符合的数据类型,在对象中可以保存多个不同数据类型的属性
        
        对象的分类:
          1.内建对象
            -ES标准中定义的对象,任何ES实现中都可以使用
            -比如: Math String Number Boolean Function Object
          
          2.宿主对象
            -由JS运行环境提供的对象,目前来讲主要由浏览器运行
            -比如BOM DOM
          
          3.自定义对象
            -由开发人员自定义对象
            */

/*创建对象
      - 使用new关键字调用函数,构造函数
      - 构造函数专门用来创建对象函数
    */
var obj = new Object();
console.log(typeof obj);

/*
    在对象中保存的值为属性
    向对象添加对象
      语法:对象.属性名 = 属性值
    */

obj = {
  //在obj中添加一个name属性
  name: "顺悟空",
  age: 18,
  sex: true,
};
//读取对象属性  对象.属性名
console.log(obj.name);

//删除对象属性名
delete obj.sex;
console.log(obj.sex);
