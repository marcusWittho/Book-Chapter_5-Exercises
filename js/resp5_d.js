var lista = [];

function adicionar() {
  if(inNot.value == "") {
    alert("O campo está vazio.");
    inNot.focus();
    return;
  }else {
    lista.push(inNot.value);
    inNot.value = "";
    inNot.focus();
    document.querySelector("#outTotal").textContent = `Notícias cadastradas: ${lista.length}`;
  }
}

var btAdicionar = document.querySelector("#btAdicionar");
btAdicionar.addEventListener("click", adicionar);


function listar() {
  var num = Number(prompt("Quantas notícias deseja ver?"));
  if(num == 0 || isNaN(num) || num > lista.length) {
    alert("Valor inválido");
    return;
  }else {
    var copy = lista.slice();
    copy.reverse();
    var outLista = document.querySelector("#outLista");
  }
  var last = "";
  var indice = copy.length;
  for(var i = 0; i < num; i++) {
    last += `${indice}ª) ${copy[i]}\n`;
    indice--;
  }
  outLista.textContent = `${num} Últimas notícias\n --------------\n${last}`;

}

var btListar = document.querySelector("#btListar");
btListar.addEventListener("click", listar);