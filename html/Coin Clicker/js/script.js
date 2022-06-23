var coin = 0,
  clicks = 0,
  mult = 1,
  Pcoin = 0,
  Pclicks = 0,
  Pmult = 1,
  isFrist = false,
  isFrist2 = false,
  isFrist3 = true;

// variaveis

var DisCoin = document.getElementById("display1"),
  DisClicks = document.getElementById("display2"),
  DisAuto1 = document.getElementById("display3"),
  DisAuto2 = document.getElementById("display4"),
  Title = document.getElementById("display5"),
  DisBanco = document.getElementById("display6"),
  DisCPC = document.getElementById("display7"),
  AutoClick1 = 0,
  AutoClick2 = 0,
  banco = 0,
  conter = 0;

var coinElement = document.getElementById("coin");
var is1 = true,
  is2 = true,
  cnt = 0;

var audio = document.getElementById("audio");

//eventos

window.addEventListener("load", () => {
  var mostar = localStorage.getItem("mostrar");
  if (mostar == true || mostar == "" || mostar == null) {
    alert("Bem-vindo ao Coin Clicker, este é o seu tutorial");
    alert("clique na moeda giratoria e ganhe coins!");
    alert("faça upgrades e ganhe muitos coins");
    while (true) {
      var mostrar = confirm(
        "mostrar tutorial na proxima vez que visitar o site?"
      );
      if (mostrar == false) {
        alert("okay, isso siginifica que você entendeu :)");
        localStorage.setItem("mostrar", false);
        break;
      } else if (mostrar == true) {
        alert("entendido!");
        localStorage.setItem("mostrar", true);
        break;
      }
    }
  }
});

function atualizar() {
  DisCPC.innerHTML = "Coins por Click: " + mult;
  DisCoin.innerHTML = "Coins: " + coin;
  DisClicks.innerHTML = "Clicks: " + clicks;
  DisBanco.innerHTML = "Bancos comprados: " + banco;
  DisAuto1.innerHTML = "Auto Clicks (LV 1) comprados: " + AutoClick1;
  DisAuto2.innerHTML = "Auto Clicks (LV 2) comprados: " + AutoClick2;
}

const kei = setInterval(() => {
  atualizar();
}, 200);

coinElement.addEventListener("click", () => {
  clicks++;

  coin += mult;
});

Title.addEventListener("click", function titulo() {
  cnt++;
  Title.classList.add("grow");
  var intervalo = setTimeout(() => {
    Title.classList.remove("grow");
    clearInterval(intervalo);
  }, 1900);
  if (cnt == 10) {
    Title.innerHTML = "Coin Flaper 2D";
  } else if (cnt == 20) {
    Title.innerHTML = "Coin Fliper [King 2.0] 1D";
    cnt = 0;
  }
});

function buy1() {
  if (coin >= 100) {
    coin -= 100;
    mult += 1;
  } else {
    alert("sem dinheiro");
  }
}

function buy2() {
  if (coin >= 900) {
    coin -= 900;
    mult += 10;
  } else {
    alert("sem dinheiro");
  }
}
function buy3() {
  if (coin >= 2000) {
    coin -= 2000;
    AutoClick1++;

    setInterval(() => {
      clicks++;

      coin += mult;
    }, 10000);
  } else {
    alert("sem dinheiro");
  }
}

function buy4() {
  if (coin >= 4000) {
    coin -= 4000;
    AutoClick2++;

    setInterval(() => {
      clicks++;

      coin += mult;
    }, 5500);
  } else {
    alert("sem dinheiro");
  }
}

function buy5() {
  if (coin >= 20000) {
    coin -= 20000;
    banco++;

    setInterval(() => {
      mult += mult;
    }, 60000);
  } else {
    alert("sem dinheiro");
  }
}


var teclas = [];
var index1 = -1;
function buy6() {
  if (coin >= 20000) {
    coin -= 20000;
    index1++;
    var tecla = String(prompt("qual tecla deseja adicionar")).toLowerCase();
    var key = tecla.substr(0, 1);
    if (!teclas.includes(key)) {
        teclas[index1] = key;
        alert("adicionando tecla " + key);
    document.addEventListener("keydown", (e) => {
      if (teclas.includes(e.key)) {
        clicks++;

        coin += mult;
      } else {
        alert("tecla inexistente");
      }
    });
    } else {
        alert(`a tecla ${key} ja existe`)
        coins += 20000;
    }
  } else {
    alert("sem dinheiro");
  }
}

function exit() {
  if (clicks > 400) {
    coin = 0;
    clicks = 0;
    mult *= 5;
    Title.innerHTML = "Coin Clicker 2D";
  } else {
    alert("sem clicks");
  }
}

function salvar() {
  Pclicks = clicks;
  Pcoin = coin;
  Pmult = mult;
}

function reset() {
  clicks = 0;
  coin = 0;
  mult = 0;
  localStorage.setItem("mostrar", true);

  mostar = localStorage.getItem("mostrar");
  var mostar = localStorage.getItem("mostrar");
  if (mostar == true || mostar == "" || mostar == null) {
    alert("Bem-vindo ao Coin Clicker, este é o seu tutorial");
    alert("clique na moeda giratoria e ganhe coins!");
    alert("faça upgrades e ganhe muitos coins");
    while (true) {
      var mostrar = confirm(
        "mostrar tutorial na proxima vez que visitar o site?"
      );
      if (mostrar == false) {
        alert("okay, isso siginifica que você entendeu :)");
        localStorage.setItem("mostrar", false);
        break;
      } else if (mostrar == true) {
        alert("entendido!");
        localStorage.setItem("mostrar", true);
        break;
      }
    }
  }
}

function carregar() {
  coin = Pcoin;
  clicks = Pclicks;
  Pmult = mult;
}
