//forEach練習

const array = [
  {
    "跳び箱": 56,
    "短距離走": 89,
    "長距離走": 67
  }
];

console.log(`あなたの結果は`);
for(let [key, value] of Object.entries(array[0])) {
  console.log(`${key}, ${value}`);
}
