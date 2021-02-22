//1. 创建方法类
function fnA(name,age){
    this.name = name;
    this.age  = age;
}

// 给原型添加方法
fnA.prototype.say = function(){
    console.log(this.name);

}

// 3.实例化对象
const A1 = new fnA("李智恩",28);
console.log(A1.age);
A1.say();


// 2. class创建类
class fnB{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }

    say(){
        console.log(this.name);
    }
}

const B1 =  new fnB("李智恩",28);
console.log(B1.age);
B1.say()