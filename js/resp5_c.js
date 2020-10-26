var candidatos = [];

function add() {
    var inNome = document.getElementById("inNome");
    var inNum = document.getElementById("inNum");
    
    if(inNome.value == "" || inNum.value == "" || isNaN(inNum.value)) {
        alert("Preencha corretamente.");
        inNome.focus();
        return;
    }else {
        var nome = inNome.value;
        var num = Number(inNum.value);
        candidatos.push({candidato: nome, acertos: num});
        inNome.focus();
        inNome.value = "";
        inNum.value = "";
    }

    listar();
}

var btListar = document.getElementById("btAdicionar");
btListar.addEventListener("click", add);


function listar() {    
    if(candidatos.length == 0) {
        alert("A lista está vazia.");
        return;
    }
    
    var rel = "";
    for(var i = 0; i < candidatos.length; i++) {
        rel += `${candidatos[i].candidato} - ${candidatos[i].acertos} acertos\n`;
    }

    document.getElementById("outLista").textContent = rel;
}

var btListar = document.getElementById("btListar");
btListar.addEventListener("click", listar);


function aprovados() {
    if(candidatos.length == 0) {
        alert("A lista está vazia.");
        return;
    }

    var corte = Number(prompt("Número de acertos para aprovação?"));
    if(corte == 0 || isNaN(corte)) {
        alert("Número inválido");
        return;
    }
    
    var copy = candidatos.slice();
    copy.sort(function(a, b) {return a.acertos - b.acertos});
    copy.reverse();

    var rel = "";
    for(var i = 0; i < copy.length; i++) {
        if(copy[i].acertos >= corte) {
            rel += `${copy[i].candidato} - ${copy[i].acertos} acertos\n`;
        }
    }
    
    document.querySelector("pre#outLista").textContent = rel;
}

var btAprovados = document.getElementById("btAprovados");
btAprovados.addEventListener("click", aprovados);