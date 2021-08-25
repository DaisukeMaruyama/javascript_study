//配列の中のある数字は何番目にあるか?アルゴリズム問題。7は配列の何番目にあるか

const targetData = 7;
const data = [1, 2, 3, 5, 7, 8, 10, 11];

function search () {
  for (let i = 0; i<data.length; i++){
    if (targetData === data[i]) {
      console.log(`${targetData}は配列の${i}番目にあります。`);
      return
    } 
  }
  console.log(`${targetData}は配列にありません`);
}

search();