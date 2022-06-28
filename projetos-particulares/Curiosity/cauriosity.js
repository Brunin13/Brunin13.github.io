var list = [];

function random() {
    const maxNumbers = 19;
let list = [];
for (let i = 0; i < maxNumbers; i++) {
   list[i] = i + 1;
}

    let randomNumber;
    let tmp;

for (let i = list.length; i;) {
    randomNumber = Math.random() * i-- | 0;
    tmp = list[randomNumber];
    // troca o número aleatório pelo atual
    list[randomNumber] = list[i];
    // troca o atual pelo aleatório
    list[i] = tmp;
    var beReturn = list[3];
}


return beReturn;
}

var curiosidades = ['O cavalo marinho é o peixe mais lento que existe', 'Um homem gasta em média 145 dias da sua vida se barbeando', 'Ficar acordado por 2 semanas pode te matar', 'Girafas dormem entre 10 minutos e 2 horas por dia', 'Os babuínos já foram treinados pelos egípcios para servirem a mesa e esperar de pé até terminar a refeição', 'A pessoa mais rica já falecida é Elvis Presley', 'Existem aproximadamente 5, 000, 000, 000, 000, 000, 000, 000, 000, 000,000 de bactérias vivendo no planeta Terra', '25% dos ossos do nosso corpo estão no pé', 'O pássaro Lira pode imitar qualquer som que ele escuta (já imaginou um passarinho imitando o Silvio santos', 'As pessoas são mais altas de manhã do que de noite', 'É possível sim morrer de rir', 'Chocolate faz bem para os dentes', 'Os monges tibetanos dormem em pé', 'Coelhos não podem vomitar', 'O fumante perde em média 2 dentes a cada ano', 'As cordas das guitarras eram feitas originalmente de tripas de gato', 'Crianças crescem mais rápido na primavera', 'Walt Disney recebeu um oscar e 7 miniaturas pela branca de neve', 'A mentira mais contada é : Estou Bem', 'A Bíblia diz que a fruta proibida não era uma maçã', ]
function comprar() {
    var confirma = confirm("comprar "+ 1 +" curiosidades por R$"+ 1 +"?");
    if(confirma == true ) {
        alert("comprando..")
        alert("sorteando...");
        var time = setInterval(() => {
            clearInterval(time);
        }, 1000);
        var rand = random();
        alert("sua curiosidade é: " + curiosidades[rand])
    } else {
        alert("cancelando compra...");
    }
}


