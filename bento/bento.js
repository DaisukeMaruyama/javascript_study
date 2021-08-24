const OPTION_ANSWER = document.getElementById("optionAnswer");

function riceButtonClick () {
  const RICE_INPUT = document.riceForm.rice
  let rice_output;
  for (let i = 0; i<RICE_INPUT.length; i++) {
    if (RICE_INPUT[i].checked) {
      rice_output = RICE_INPUT[i].value
    }
  }
  OPTION_ANSWER.textContent = `ご飯の量は${rice_output}です。`
}