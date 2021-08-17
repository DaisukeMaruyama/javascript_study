//findメソッド練習

const users = [
  { id: 101, name: 'Alice' },
  { id: 102, name: 'Bob' },
  { id: 103, name: 'Charlie' }
];

//idが10３で名前がCharlieの人を持ってくる
const targetNumber = users.find((user)=>{
  return user.id === 103, user.name === "Charlie";
});

//名前とIDを個別に表示
console.log(`IDは${targetNumber['id']}`);
console.log(`名前は${targetNumber['name']}`);