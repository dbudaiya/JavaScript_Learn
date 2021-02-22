/*1. 声明特性 */
let a;
let b, c;
let e = 100;
let f = "budaishu",
  g = 123;
console.log(f);

/* 2. 变量不能重复声明*/
// let a1 = "IU";
// let a1 = "李智恩";

/* 3.块级作用域 全局 函数 eval*/
{
    let b1 = 'IU'
}
// console.log(b1);

/* 4. 不会存在变量提升*/
// console.log(c1);
// let c1 = "李智恩";

/* 5. 不影响作用域链*/
{
    let d1 = "李智恩";
    function fn1(){
        console.log(d1);
    }
    fn1()
}


