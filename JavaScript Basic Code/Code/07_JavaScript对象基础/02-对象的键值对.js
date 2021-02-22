var obj = new Object();

/*
      -对象的属性名不强制要求遵循标识符规范
        什么乱七八糟的名字都可以用
      -但是我们使用时还是尽量按照标识符去做*/
obj.name = "顺物流";
obj.var = "hello";
console.log(obj.var);

/*如果使用特殊属性名,不能采用.的方式
      需要使用另一种方式
    语法: 对象["属性名"] = "属性值"
      读取时也需要采用这种方式
    使用[]这种形式去操作属性,更加灵活
      在[]中可以直接传递一个变量,这样变量值是多少就会读取那个属性
      */
//obj.123 = 879;    以下面的方式去取
obj["123"] = 456;
console.log(obj["123"]);

var hh = "123";
console.log(obj[hh]);

/*
    属性值
      JS对象的属性值,可以是任意数据类型

    一层里面套了一层
      */
obj.test = true;
obj.test = null;
obj.test = undefined;

//创建对象
var obj2 = new Object();
obj2.name = "猪八戒";

//将obj2设置为obj的属性
obj.test = obj2;
console.log(obj.test.name);

/*
    in 运算符
      -通过该运算符可以检查一个对象中是否含有指定的属性
      -语法:
        "属性名" in 对象    不要忘记了有一个双引号
    */
console.log("name" in obj2);

//------------------第二种-----------------------------

//创建对象
var hh = new Object();
/* 
    使用字面量创建对象
 */
var obj = {};
console.log(typeof obj); 
console.log(typeof hh);
obj.name = "布袋"
console.log(obj.name)

/* 使用对象字面量可以在创建对象时，直接指定对象的属性
 语法格式：{
     属性名1：属性值1，
     属性名2：属性值2，
      属性名3：属性值3，
 }
 对象字面量的属性名可以加引号也可以不加，建议不加
 如果使用特殊的，就必须要加上双引号
 */
var budai =[1,2,3,4,4,5]
var journey = {
    name: '老猪',
    age: 13,
    gender: '男',
    test: budai
}
console.log(journey.test)
</script>