//成績管理アプリ

const readLine = require("readline-sync");
const students = [];
const menus = ["成績を登録","成績を見る","アプリケーションを終了する"];
const next = true;

//登録
function registration (students) {
  student = {};
  const name = readLine.question("名前を入力してください");
  const math = readLine.questionInt("数学の点数を入力ください");
  const language = readLine.questionInt("国語の点数を入力ください");
  const english = readLine.questionInt("英語の点数を入力ください");
  student["名前"] = name;
  student["数学"] = math;
  student["国語"] = language;
  student["英語"] = english;
  students.push(student);
  console.log("成績を登録しました。");
}

//成績をみる
function check (students) {
  students.forEach((student, index)=>{
    console.log(`生徒番号${index}: 名前${student["名前"]}`);
  });
  const number = readLine.questionInt("見たい生徒の成績を番号で入力ください。")
  showing_student = students[number];
  console.log("名前" + showing_student["名前"]+ "さん");
  console.log("数学" + showing_student["数学"]+ "点");
  console.log("国語" + showing_student["国語"]+ "点");
  console.log("英語" + showing_student["英語"]+ "点");
}

//実施
while (next) {

  menus.forEach((menu, index)=>{
    console.log(`${index}: ${menu}`);
  });
  const target = readLine.questionInt("やりたい事をメニューから数字で選んでください。");

  if (target === 0) {
    registration (students);
  } else if (target === 1) {
    check (students);
  } else if (target === 2) {
    return false;
  } else {
    console.log("メニューから番号で選んでください。");
  }
}


