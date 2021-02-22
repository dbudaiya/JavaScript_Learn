// 1.声明一个数组
const A1 = ["WHISTLE", "BOOMBAYAH", "PLAYING WITH FIRE"];

// 2.声明函数
function fn1(){
    console.log(arguments);
}

fn1(...A1); //等同于fn1("WHISTLE", "BOOMBAYAH", "PLAYING WITH FIRE")