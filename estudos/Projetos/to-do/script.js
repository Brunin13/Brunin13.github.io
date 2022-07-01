var noAlvo = false;
function allowDrop(ev) {
  ev.preventDefault();
  noAlvo = true;
}

function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
  ev.preventDefault();
  var element = ev.dataTransfer.getData("text");
  ev.target[0].appendChild(document.getElementById(element));
}

function testTarget(ev) {
  ev.preventDefault();
  console.log(noAlvo);
}
function start() {
  var targetIsValid = testTarget();
  if (targetIsValid) {
  }
}


function createTask() {
  let div = document.getElementById("criadas");
  let msg = document.getElementById("tarefaC").value;
  let Novadiv = document.createElement(
    'div'
  );
  Novadiv.setAttribute(
    'id', 'text',
    'draggable', true,
    'ondragend', start()
  );


  Novadiv.addEventListener('dragstart', drag(e))
  Novadiv.addEventListener("dragend", start());


  Novadiv[0].innerText = msg;
  div[0].appendChild(Novadiv);
}

let btn = document.getElementById('btn')

btn.addEventListener('click', createTask)
