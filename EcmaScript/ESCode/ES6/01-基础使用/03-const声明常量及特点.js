/* 1. 声明常量*/
const NAME = "IU";

// 1.1 一定要赋值
// const A1 ;

// 1.2 一般使用大写(潜规则),一般不会报错
const A2 = "李智恩";

// 1.3 常量的值不能修改
// const A3 = "IU"
// A3 = "李智恩"

/*2. 块级作用域*/
// {
//     const B1 = '李智恩'
// }
// console.log(B1);

/*3. 对于数组和对象的元素修改,不算做对常量的修改,不报错*/
const C1 = {
  name: "李智恩",
  age: 18,
};
C1.name = "小布袋";

const C2 = ["WHISTLE", "BOOMBAYAH", "PLAYING WITH FIRE"];
C2.push("LISA");
