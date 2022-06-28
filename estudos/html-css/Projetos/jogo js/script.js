let personagem = document.querySelector('#personagem')
let quadrado = document.querySelector('#quadrado')
var pulo = document.getElementById("imagen")

pulo.addEventListener("click", function(){pular()})

function pular(); {
    if(personagem.classList != 'animar'); {
        personagem.classList.add('animar')
    }

    setTimeout(function() {
        personagem.classList.remove('animar')
    }, 500)
}

var testarColisao = setInterval( function(){

    var topoPersonagem = parseInt(
        window.getComputedStyle('personagem').getPropertyValue('top')
    )
    var esquerdaquadrado = parseInt(
        window.getComputedStyle('quadrado').getPropertyValue('left')
    )
    
    if(esquerdaquadrado < 20 && esquerdaquadrado > 0 && topoPersonagem >= 130){
        quadrado.style.animation = 'none';
        quadrado.style.display = 'none';
        alert('você perdeu')
    }

}, 10)