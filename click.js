function myFunction() {
  const e = document.getElementById("mySelect").value;
  document.getElementById("demo").innerHTML = "あなたの選んだ色は" + e + "色です。";
}

const input = document.querySelector("input");
const history = document.getElementById("history");

input.addEventListener("change", updateValue);

function updateValue(i) {
  history.textContent = i.target.value;
}