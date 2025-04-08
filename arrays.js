let myArr = [10, 20, 30, 40, 50];

console.log(myArr);

let newValues = [11, 12, 13, 14, 15];
let output = myArr.splice(2, 3, ...newValues);

console.log(myArr);
console.log(output);