let btn = document.getElementById("btn");
btn.value = `ver mais`;
let div = document.getElementById("saiba-mais");
let btn2 = document.getElementById("btn2");
let i = 0;

btn.addEventListener("click", verify);

function verMais() {
  div.style.visibility = "visible";
  btn.value = `ver menos`;
}

function verMenos() {
  div.style.visibility = "hidden";
  btn.value = `ver mais`;
}

function verify() {
  if (i == 1) {
    verMenos();
  } else if (i == 0) {
    verMais();
  } else {
    i = 0;
    verMais();
  }
  i++;
}
