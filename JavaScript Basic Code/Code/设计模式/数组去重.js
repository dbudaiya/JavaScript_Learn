//数组去重
const array = [1, 2, 3, 5, 1, 5, 9, 1, 2, 8];
console.log(uniqueArray(array));

// var product =  Array.from(new  Set(array));
// console.log(product)

//ES5
function uniqueArray(array) {
  const hashmap = {};
  const unique = [];

  // 函数hasOwnProperty
  for (let i = 0; i < array.length; i++) {
    if (!hashmap.hasOwnProperty(array[i])) {
      hashmap[array[i]] = i;
      unique.push(array[i]);
    }
  }
  return unique;
}
