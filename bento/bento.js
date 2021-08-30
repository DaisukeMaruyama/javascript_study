//弁当の種類 

const NAME = document.getElementById("name");
const PRICE = document.getElementById("price");
const IMAGE = document.getElementById("image");
//並
const NAMI = document.getElementById("nami");
NAMI.onclick = function () {
  NAME.textContent = "お弁当 -並-";
  PRICE.textContent = "1000";
  IMAGE.setAttribute("src", "img/nami.bento.png")
}

NAMI.addEventListener("mouseover", () => {
  NAMI.classList.add("btn-lg");
}, false)
NAMI.addEventListener("mouseleave", () => {
  NAMI.classList.remove("btn-lg");
}, false)

//上
const JYOU = document.getElementById("jyou");
JYOU.onclick = function () {
  NAME.textContent = "お弁当 -上-";
  PRICE.textContent = "2000";
  IMAGE.setAttribute("src", "img/jou.bento.png");
}

JYOU.addEventListener("mouseover", () => {
  JYOU.classList.add("btn-lg");
}, false)
JYOU.addEventListener("mouseleave", () => {
  JYOU.classList.remove("btn-lg");
}, false)

//ショッピングカート
const CART_CONFIRM = document.getElementById("cartConfirm");
const CART_LIST = document.getElementById("cartList");

CART_CONFIRM.onclick = () => {
  const LI = `<li>${NAME.textContent}</li>`;
  CART_LIST.insertAdjacentHTML( `beforeend`, LI);
}

//オプション
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

//チェックボックス
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

//セレクトボックス
const MEDIA_OPTION_ANSWER = document.getElementById("mediaOptionAnswer");

function mediaButton () {
  const MEDIA_INPUT = document.mediaForm.media;
  const NUM = MEDIA_INPUT.selectedIndex;
  MEDIA_OPTION_ANSWER.textContent = MEDIA_INPUT.options[NUM].value; //document.フォーム名.selectオブジェクト名.options[index番号].valueで取得可能
}

//テキストボックス
const TEXT_OPTION_ANSWER = document.getElementById("addressOptionAnswer");

function addressButton () {
  const ADDRESS_INPUT = document.addressForm.address;
  TEXT_OPTION_ANSWER.innerHTML = `お届け先住所： ${ADDRESS_INPUT.value}`;
  ADDRESS_INPUT.value = " "
}

//テキストエリア

const TEXTAREA_OPTION_ANSWER = document.getElementById("requestAnswer");

function requestButton () {
  const REQUEST_INPUT = document.requestForm.request;
  TEXTAREA_OPTION_ANSWER.innerHTML = REQUEST_INPUT.value;
  REQUEST_INPUT.value = " "; 
}

//onchange

const ONCHANGE_OPTION_ANSWER = document.getElementById("onChangeAnswer");

function payment () {
  const s = document.getElementById("onchangeSelect").selectedIndex;
  const ONCHANGE_INPUT = document.onchangeForm.onchangeSelect.options[s].value;
  ONCHANGE_OPTION_ANSWER.innerHTML = ONCHANGE_INPUT;
}