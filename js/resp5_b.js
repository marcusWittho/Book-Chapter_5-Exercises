var ordem = [];

function adicionar() {
    var inNum = document.getElementById("inNum");
    var num = Number(inNum.value);

    if(num == "" || isNaN(num)) {
        alert("Preencha corretamente.");
        inNum.focus();
        return;
    }

    if(ordem.indexOf(num) < 0) {
        ordem.push(num);  
        var lista = "";
        lista = `Números: ${ordem[0]}`;
        for(var i = 1; i < ordem.length; i++) {
            lista += `, ${ordem[i]}`;
        }
    }else {
        alert("Número repetido");
        inNum.value = "";
        inNum.focus();
        return;
    }

    document.getElementById("outLista").textContent = lista;

    document.getElementById("outRetorno").textContent = "";
    inNum.value = "";
    inNum.focus();
}

var btAdd = document.getElementById("btAdd");
btAdd.addEventListener("click", adicionar);

function verificar() {

    var lista = ordem.slice();
    lista.sort();

    for(var i = 0; i < lista.length; i++) {
        if(ordem[i] != lista[i]) {
            document.getElementById("outRetorno").textContent = "Atenção, números fora de ordem.";
            inNum.value = "";
            inNum.focus();
            return;
        }
    }

    document.getElementById("outRetorno").textContent = "Os números estão na ordem.";

    inNum.value = "";
    inNum.focus();
}

var btVerificar = document.getElementById("btVerificar");
btVerificar.addEventListener("click", verificar);