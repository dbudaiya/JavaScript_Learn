/*
    1.变量命名规范
        - 首字母必须是字母或者下划线也可以是$
        - 其他字符可以是字母或下划线或$或数字
    
    2.什么是关键词
        - 关键词:解析代码是,这个单词有特殊含义
        - 保留字:目前保留字还没有成为关键字,但是作为预留,以后可能升级为关键字
*/

var a_$ = "李智恩";

/*
    1.JS中严格区分大小写
    2.JS中每条语句以分号结束,也可以不写,在一行得写好
      -如果不写浏览器会自动添加,但是会浪费一些系统资源
        而且有些时候,浏览器会自动加错分号,所以在开发是必须写
    3.JS中忽略多个空格和换行,所以我们可以利用空格和换行来美化代码
    */

console.log(false === 0);
console.log(false == 0);
var ifo = Infinity;
console.log(0 / 0);
console.log(2 / 0);
123; // 整数123
0.456; // 浮点数0.456
1.2345e3; // 科学计数法表示1.2345x1000，等同于1234.5
-99; // 负数
NaN; // NaN表示Not a Number，当无法计算结果时用NaN表示
Infinity; // Infinity表示无限大，当数值超过了JavaScript的Number所能表示的最大值时，就表示为Infinity]

var $person = {
  s_name: "back",
  age: 20,
  Host: {
    hostry: "aaaa",
    cc: {
      naa: true,
      zipcode: null,
    },
  },
  down: 1234e3,
};
