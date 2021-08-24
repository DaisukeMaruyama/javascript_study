const OPTION_ANSWER = document.getElementById("optionAnswer");

function riceButtonClick () {
  const RICE_INPUT = document.riceForm.rice //又はdocument.getElementsByName("rice")
  let rice_output;
  for (let i = 0; i<RICE_INPUT.length; i++) {
    if (RICE_INPUT[i].checked) {
      rice_output = RICE_INPUT[i].value;
    }
  }
  OPTION_ANSWER.textContent = `ご飯の量は${rice_output}です。`
}

const ACCESSORY_OPTION_ANSWER = document.getElementById("accessoryOptionAnswer");

function accessoryButtonClick() {
  const ACCESSORY_INPUT = document.getElementsByName("accessory");
  let accessory_output = " ";
  for (let a = 0; a<ACCESSORY_INPUT.length; a++) {
    if (ACCESSORY_INPUT[a].checked) {
      accessory_output = accessory_output + " " + ACCESSORY_INPUT[a].value;
    }
  }
  ACCESSORY_OPTION_ANSWER.innerHTML = `付属品は${accessory_output}です。`

}

const MEDIA_OPTION_ANSWER = document.getElementById("mediaOptionAnswer");

function mediaButton () {
  const MEDIA_INPUT = document.mediaForm.media;
  const NUM = MEDIA_INPUT.selectedIndex;
  MEDIA_OPTION_ANSWER.textContent = MEDIA_INPUT.options[NUM].value;
}