//配列に代入する方法　練習

const readLine = require("readline-sync");

const input = readLine.question("配列に代入する文字を入れてください。");
const array = [];
array.push(input);
console.log("配列の先頭↓")
console.log(array[0]);

const input2 = readLine.question("配列の2番目に入れる文字を入力ください。");
array.push(input2);
console.log("2番目の配列↓")
console.log(array[1]);

console.log("配列の中身全て↓");
console.log(array);



