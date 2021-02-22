/*1. 数组的解构*/
const A1 = ["WHISTLE", "BOOMBAYAH", "PLAYING WITH FIRE"];
let [a1, a2, a3] = A1;
console.log(a1);
console.log(a2);
console.log(a3);

/*2. 对象的解构*/
const B1 = {
  name: "李智恩",
  age: 18,
  say() {
    console.log("BLACKPINK");
  },
};

let { name, age, say } = B1;
console.log(name);
console.log(age);
say();
