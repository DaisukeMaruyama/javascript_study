//mapメソッド

const numbers = [1,2,3,4];

const doubledNumber = numbers.map((number)=>{
  return number * 2;
});

console.log(doubledNumber);

const names = [
  {firstname: "Leonys", lastname: "Martin"},
  {firstname: "Brandon", lastname: "Leard"}
]

const fullname = names.map((name)=>{
  return name.firstname + name.lastname;
});

console.log(fullname);