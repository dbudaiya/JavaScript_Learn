/*1. 形参初始值 具有默认值的参数,一般位置要靠后(潜规则)*/
// let A1 = function(a,b){
//     return a+b;
// }

// let result = A1(1);
// console.log(result);//NaN

let A1 = function (a, b = 5) {
  return a + b;
};

let result = A1(1);
console.log(result);

/*2. 与解构赋值结合*/
// function B2(options){
//     hostname = options.hostname;
//     username =  options.username;
// }
function connect({host,user}){
    console.log(host);
    console.log(user);
}

connect({
    host:'localhost',
    user:'李智恩'
})

   


