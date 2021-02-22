// 1.定义函数,传参累加之和返回
function fnA(A1) {
  var nums = 0;
  for (var i = 1; i <= A1; i++) {
    nums += i;
  }

  return nums;
}

console.log(fnA(10));


// 2.斐波那契数列
// 1 1 2 3 5 8 13 21 34 ..........
