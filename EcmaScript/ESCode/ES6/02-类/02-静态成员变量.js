// 1.静态成员
function fnA(name,age){
    this.name = name;
    this.age = age;

}

fnA.name = "李智恩";
fnA.say = function(){
    console.log("我将被打印");
}

const A1 = new fnA();
// console.log(A1.name); //undefined
// A1.say()  //not a function

//2. class类
class fnB{

    // 静态属性
    static name = "李智恩";
    static say(){
        console.log("我将被打印");
    }
}

const B1 = new fnB()
console.log(fnB.name); //属于类方法
console.log(B1.name);


  
