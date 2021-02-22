/*1.声明形式*/ 
let A1 =(a,b)=>{
    return a+b;
}
console.log(A1(1,2));

// 1.1 this是静态的,this始终指向函数声明时所在的作用域下this指向的值
window.name = '李智恩';
let superStart = {
    name : "李智恩"
}

function A2(){
    console.log(this.name);
}

let A3 = ()=>{
    console.log(this.name);
}

// 直接调用
A2();
A3();

// 换参调用
A2.call(superStart)
A3.call(superStart)


/*2.不能作为实例对象来使用*/ 
// let B1 = (name,age) => {
//     this.name = name;
//     this.age  = age;
// }

// let me = new B1("李智恩",18);
// console.log(me.name);

/*3. 不能使用arguments变量*/ 
let C1 = ()=>{
    console.log(arguments);
}

C1(1,2,3);

/*4. 箭头函数简写方式*/ 
//4.1 省略小括号,当行参只有一个时,
let D1 = a => a+a

// 4.2 省略花括号,当代码块只有一条语句时,此时return必须省略.
let D2 = (a,b)=>{return a+b}
let D2 = (a,b) => a+b;

