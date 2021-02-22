//1. Objetc.is 判断两个值是否完全相等
console.log(Object.is(120, 120));
console.log(Object.is(NaN, NaN));
console.log(NaN == NaN);

//2. Object.assign 对象的合并
const obj1 = {
  name: "杜审言",
  age: 11,
  sex: "nan",
};

const obj2 = {
  name: "李智恩",
  age: 11,
};

console.log(Object.assign(obj1, obj2));

// 3.Object.setPrototypeOf  Object.getPrototypeof
