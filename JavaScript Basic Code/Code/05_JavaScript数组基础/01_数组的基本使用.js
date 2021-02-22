/* 1.递归到数组的过程,为什么有数组?*/
var name = "李智恩";
var name1 = "iIU";

var names = ["李智恩", "IU"];

/* 2.保存很多数据*/
var goods = [
  {
    name: "李智恩",
    age: "11",
  },
  {
    name: "李智恩",
    age: "11",
  },
  {
    name: "李智恩",
    age: "11",
  },
];
console.log(goods);
/* 3.建议不要再一个数组中存放不同数据类型的值*/
var C1 = [11, "李智恩", true, undefined, { name: "IU" }, ["A1", "A2"]];
