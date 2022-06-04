
var storage1 = parseInt(localStorage.getItem('coinsValue'));
if (storage1 == '' || storage1 == null) {
    storage1 = 0;
}

var storage2 = parseInt(localStorage.getItem('clicksValue'));
if (storage2 == '' || storage2 == null) {
    storage2 = 0;
}

var storage3 = parseInt(localStorage.getItem('multValue'));
if (storage3 == '' || storage3 == null) {
    storage3 = 1;
}

var coin = storage1,
clicks = storage2,
mult = storage3,
subir = 0,
phant,
Pcoin,
Pclicks,
Pmult,
isFrist = false, isFrist2 = false, isFrist3 = true;

// variaveis

var DisCoin = document.getElementById("display1"),
DisClicks = document.getElementById("display2"),
DisAuto1 = document.getElementById("display3"),
DisAuto2 = document.getElementById("display4"),
Title = document.getElementById("display5"),
DisCPC = document.getElementById("display7"),
AutoClick1 = 0,
AutoClick2 = 0,
pct = document.getElementById("porcentagem");
pct.style.width = "0%";
var conter= 0;

var coinElement = document.getElementById("coin");
var is1 = true, is2 = true, cnt = 0;

var audio = document.getElementById('audio');

//eventos

var temp = setInterval(() => {
    localStorage.setItem('coinsValue', coin);
    localStorage.setItem('clicksValue', clicks);
    localStorage.setItem('multValue', mult);
}, 500);

window.addEventListener('load', function load() {
    var mostar = localStorage.getItem('mostrar');
    if (mostar == "S" || mostar == "" || mostar == null) {
        alert("Bem-vindo ao Coin Clicker, este é o seu tutorial");
        alert("clique na moeda giratoria e ganhe coins!");
        alert("faça upgrades e ganhe muitos coins");
        while (true) {
            var mostrar = prompt("mostrar tutorial outra vez? (S/N)");
            if (mostrar == "N") {
                alert("okay, isso siginifica que você entendeu :)");
                localStorage.setItem('mostrar', 'N');
                break;
            } else if (mostrar == "S") {
                alert("entendido!");
                localStorage.setItem('mostrar', 'S');
                break;
            } else {
                alert("o digito " + mostrar + " é invalido digite (S para Sim e N para Não)");
            }
        }
    }
});

function atualizar() {
    DisCPC.innerHTML = "Coins por Click: " + mult;
    DisCoin.innerHTML = "Coins: " + coin;
    DisClicks.innerHTML = "Clicks: " + clicks;
    DisAuto1.innerHTML = "Auto Clicks (LV 1) comprados: " + AutoClick1;
    DisAuto2.innerHTML = "Auto Clicks (LV 2) comprados: " + AutoClick2;
}

atualizar();

function goRed() {
    pct.classList.add("goRed");
    var time = setInterval(() => {
        pct.classList.remove("goRed");
        clearInterval(time);
    }, 5000);
}

function raizer() {
    isFrist3 = false;                
    setInterval(() => {
        var tespos = setInterval(() => {
            clearInterval(tespos);
        }, 200);
        if (subir >= 1) {
            subir += clicks
            pct.style = "width: " + clicks + "%;";
            subir -= clicks - 3;
        }
        
    }, 800);
}



coinElement.addEventListener('click', function click() {
    clicks++;
    console.log("*fap*");
    coin += mult;
    atualizar();
    var tempo = setInterval(() => {
        raizer();
        clearInterval(tempo);
    }, 1000);
});


Title.addEventListener('click', function titulo() {
    cnt++;
    Title.classList.add('grow');
    var intervalo = setTimeout(() => {
            Title.classList.remove('grow');
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
    if (coin >= 20) {
        coin -= 20;
        mult += 1;
        atualizar();
    } else {
        alert("sem dinheiro");
    }
}

function buy2() {
    if (coin >= 180) {
        coin -= 180;
        mult += 10;
        atualizar();
    } else {
        alert("sem dinheiro");
    }
}
function buy3() {
    if (coin >= 1000) {
        coin -= 1000;
        AutoClick1++;
        atualizar();
        setInterval(() => {
            clicks++;
            console.log("*fap*");
            coin += mult;
            atualizar();
        }, 5000);  
    } else {
        alert("sem dinheiro");
    }
}

function buy4() {
    if (coin >= 2000) {
        coin -= 2000;
        AutoClick2++;
        atualizar();
        setInterval(() => {
            clicks++;
            console.log("*click*");
            coin += mult;
            atualizar();
        }, 2500);    
    } else {
        alert("sem dinheiro");
    }
}

function exit() {
    if (clicks > 400) {
        coin = 0;
        clicks = 0;
        mult =+ mult;
        Title.innerHTML = "Coin Clicker 2D";
        atualizar();
    }else {
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
    localStorage.setItem('coinsValue', 0);
    localStorage.setItem('clicksValue', 0);
    localStorage.setItem('multValue', 0);
    localStorage.setItem('mostrar', 'S');
    atualizar();
    mostar = localStorage.getItem('mostrar');
    if (mostar == "S" || mostar == "" || mostar == null) {
        alert("Bem-vindo ao Coin Clicker, este é o seu tutorial");
        alert("clique na moeda giratoria e ganhe coins!");
        alert("faça upgrades e ganhe muitos coins");
        while (true) {
            var mostrar = prompt("mostrar tutorial outra vez? (S/N)");
            if (mostrar == "N") {
                alert("okay, isso siginifica que você entendeu :)");
                localStorage.setItem('mostrar', 'N');
                break;
            } else if (mostrar == "S") {
                alert("entendido!");
                localStorage.setItem('mostrar', 'S');
                break;
            } else {
                alert("o digito " + mostrar + " é invalido digite (S para Sim e N para Não)");
            }
        }
    }
}

function carregar() {
    coin = Pcoin;
    clicks = Pclicks;
    Pmult = mult;
    atualizar();
}
