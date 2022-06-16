function comprar() {
    var value = document.getElementById('input').value
    var confirm = prompt("comprar "+ value +" curiosidades por R$"+ value +"?");
    if(confirm == 'sim' || confirm == 's' ||confirm == 'S' ||confirm == 'Sim' || confirm == 'ss' ||confirm == 'SS' ||confirm == 'SIM' ) {
        window.open('comprar.html', '_self')
    } else {
        alert("cancelando compra...");
    }
}

function comprei() {
    alert("eu sei que vc n comprou efi di pi >:(");
}