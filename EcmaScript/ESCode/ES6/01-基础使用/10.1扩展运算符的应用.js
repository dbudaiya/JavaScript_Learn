//1.数组的合并
const oldArr = ["WHISTLE", "BOOMBAYAH"];
const newArr = ["PLAYING WITH FIRE"];

// 1.1 原生合并
// const Arr = oldArr.concat(newArr);

const Arr = [...oldArr, ...newArr];
console.log(Arr);

//2. 数组的克隆
const Arrs = [...Arr];
console.log(Arrs);

//3. 将伪数组转化为数组
const pseudoArray = {
  1: "div1",
  2: "div2",
  3: "div3",
};

console.log(typeof pseudoArray); //obj
const newpseudoArray = [...pseudoArray];
console.log(typeof newpseudoArray);
