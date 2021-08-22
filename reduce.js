//reduceメソッド練習

const numbers = [1,2,3,4,5];

const result = numbers.reduce(function(num1, num2){
  return num1 + num2
});

console.log(result);