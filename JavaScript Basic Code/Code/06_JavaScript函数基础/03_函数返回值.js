// 1.函数返回值得基本使用
function fnA(A1, A2) {
  console.log(A1 + A2);
}

fnA(1, 2);

/*
    1.1 返回值注意事项: 
        -  一旦程序中执行到return时,函数会立即停止,后续代码不在执行
        - 如果一个函数没有写返回值,相当于默认返回undefined
        - 如果一个函数写了return,return后不跟任何内容,相当于啥也没有返回
*/
function fnB() {
  console.log("李智恩");
  return "-------执行完毕----------";
  console.log("IU");
}

// 接收返回值
console.log(fnB());