//ダイスゲーム

const readLine = require("readline-sync");
const visual_line = "*************************";
const opponent = ["dai","sho","kori","ken"]
//再代入するときはlet。constはできない
let yourScore = 0;
let opponentScore = 0;
//乱数を出す
const rand = Math.floor(Math.random() * 3) + 1;

function yourTurn () {
  console.log(visual_line);
  const dice = readLine.question("ダイスを降ってください※enterでダイスを振る");
  const playersRoll = Math.floor(Math.random() * 6) + 1;
  console.log(`あなたの目は${playersRoll}です`)
  yourScore += parseInt(playersRoll);
  console.log(`現在の合計スコア：${yourScore}`);
}
function opponentTurn () {
  console.log(visual_line);
  const next = readLine.question("相手のターン※enterで次へ");
  const opponentRoll = Math.floor(Math.random() * 6) + 1;
  console.log(`${opponent[rand]}の目は${opponentRoll}です`)
  opponentScore += parseInt(opponentRoll);
  console.log(`現在の合計スコア：${opponentScore}`);
}

//実施
console.log(visual_line);
console.log("いざダイスゲームで勝負")
console.log(`対戦相手は${opponent[rand]}です`)
for(let turn = 0; turn<3; turn++) {
  yourTurn();
  opponentTurn();
}
