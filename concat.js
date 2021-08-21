//concat練習

const readLine = require("readline-sync");

const message = "今日の天気は"
console.log( message +"OO")
const answer = readLine.question("Oを埋めなさい");
const result = message.concat(answer);
console.log(result);