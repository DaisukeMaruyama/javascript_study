//ジャンケンアプリ
const readLine = require("readline-sync")

//内容の関数
function result() {

  const hands = ["グー","チョキ","パー"];

  console.log("あなたが出す手を数字で選んでください");
  number = 0
  hands.forEach((hand)=>{
    console.log(`${number}:${hand}`);
    number +=1;
  });

  const yourHand = readLine.question("あなたの手：");
  console.log(hands[yourHand]);

  const opponent_hand = [Math.floor(Math.random() * hands.length)];
  const opponent_result = hands[opponent_hand];

  //結果の処理

  if (hands[yourHand] === opponent_result) {
    console.log(`相手の手は『${opponent_result}』です。`);
    console.log("あいこです。");
  } else if ((hands[yourHand] === "グー" && opponent_result === "チョキ") || (hands[yourHand] === "チョキ" && opponent_result === "パー") || (hands[yourHand] === "パー" && opponent_result === "グー")) {
    console.log(`相手の手は『${opponent_result}』です。`);
    console.log("あなたの勝ちです。");
  } else {
    console.log(`相手の手は『${opponent_result}』です。`);
    console.log("あなたの負けです。");
  }

}
//上で定義した関数の実行

result();
