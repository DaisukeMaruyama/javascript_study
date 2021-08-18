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

//連想配列
const users = [];

const input3 = readLine.question("ハッシュ配列に代入する文字を入れてください。");
const input4 = readLine.questionInt("ハッシュ配列に代入する数字を入れてください。");

users.push({name: input3, id: input4});

const name = users[0]['name'];
const id = users[0]['id'];
//又はusers[0].nameとusers[0].id

users.forEach(element => {
  console.log(`名前は${name}: IDは${id}`)
});
