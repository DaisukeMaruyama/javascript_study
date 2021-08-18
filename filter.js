//filterメソッド

const array = [2, 3, 4, 6, 8, 10, 13, 16, 19, 20, 26, 29, 35, 40];

const targetNumber = array.filter((a)=>{
  return a > 20;
});

console.log(`条件に合うのは${targetNumber}`);