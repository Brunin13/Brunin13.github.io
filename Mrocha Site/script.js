let btn = document.getElementById("btn");
btn.value = `ver mais`;
let div = document.getElementById("saiba-mais");
let btn2 = document.getElementById("btn2");
let i = 0;


btn.addEventListener("click", verify);

function verMais() {
  div.innerHTML = `
  <p>Loja Cinderela - Rua Amâncio Pereira, 167, Centro.<br> Tel: +55 75 3281 1635
  <br>
  Loja Calcebem - Rua São Francisco, 21, Centro.<br> Tel: +55 75 3281 3344
  <br>
  Loja Kibella - Av.<br> Getúlio Vargas, 270 , Centro.<br> Tel: +55 75 3282 1200</p>
  <br>
  <p>Loja Dimoda - Av.<br> Getúlio Vargas, 456, Centro.<br> Tel: +55 75 3282 0440
  <br>
  Loja Step - Av.<br> Getúlio Vargas, 302, Centro.<br> Tel: +55 75 3281 6542</p>
  <br>
  <p>Loja MegaMalhas - Av.<br> Getúlio Vargas, 540, Centro.<br> Tel: +55 3282 0994
  <br>
  Loja Ellegance - Av.<br> Getúlio Vargas, Centro, 490, Centro.<br> Tel: +55 3281 6542</p>
  <br>
  <p>Loja Sobolsa - Rua Amâncio Pereira, 60, Centro.<br> Tel: +55 3281 1635
  <br id='ancora1'>
  * Todas localizadas em Paulo Afonso/BA.<br><p>
  `;
  btn.value = `ver menos`;
}

function verMenos() {
  div.innerHTML = "";
  btn.value = `ver mais`;
}

function verify() {
  if (i == 1) {
    verMenos()
  } else if (i == 0) {
    verMais()
  } else {
    i = 0;
    verMais()
  }
  i++
}