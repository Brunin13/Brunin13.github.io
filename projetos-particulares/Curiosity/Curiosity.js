function comprar() {
    var confirm = confirm("comprar "+ 1 +" curiosidades por R$"+ 1 +"?");
    if(confirm == true ) {
        alert("comprando..")
        window.open('comprar.html', '_blank')
    } else {
        alert("cancelando compra...");
    }
}

function random(n1, n2) {

}

function comprei() {
    alert("sorteando...");
    var time = setInterval(() => {
        clearInterval(time);
    }, 1000);
    random(0, 20)
}