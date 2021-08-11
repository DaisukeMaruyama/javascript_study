//readline-syncを使ってJavaScript(Node.js)でターミナルからの入力を受け取る

const readLine = require("readline-sync");

const input = readLine.question("文字を入力してください：");
console.log("-------------------------");
console.log(`あなたの入力した文字は『${input}』です。`);

