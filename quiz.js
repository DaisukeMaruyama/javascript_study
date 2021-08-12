//クイズアプリ作成。includeの復習を兼ねて。

const readLine = require("readline-sync");

const answer = ["フライパン"];
const input = readLine.question("パンはパンでも食べられるパンはなんでしょうか？");

const result = answer.includes(input);

if (result) {
  console.log("おめでとう。正解です。");
} else {
  console.log("残念。不正解です。");
}
