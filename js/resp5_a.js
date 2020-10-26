var clubes = [];

function addClube() {
    var inClube = document.getElementById("inClube");
    var clube = inClube.value;

    if(clube == "") {
        alert("Preencha o campo clube...");
        inClube.focus();
        return;
    }

    clubes.push({clube: clube});

    listarClubes();    
}

var btAdd = document.getElementById("btAdd");
btAdd.addEventListener("click", addClube);

function listarClubes() {
    if(clubes.length == 0) {
        alert("Nã há clubes cadastrados");
        inClube.focus();
        return;
    }

    var lista = "";
    for(var i = 0; i < clubes.length; i++) {
        lista += `${(i + 1)}. ${clubes[i].clube}\n`;
    }

    document.getElementById("outMostrar").textContent = lista;

    inClube.value = "";
    inClube.focus();
}

var btListar = document.getElementById("btListar");
btListar.addEventListener("click", listarClubes);

function tabela() {
    var tabClubes = clubes.slice();

    if(tabClubes.length == "") {
        alert("A tabela está vazia");
        inClube.focus();
        return;
    }else if(tabClubes.length % 2 != 0) {
        alert("Não há time suficiente para formar a tabela.");
        inClube.focus();
        return;
    }

    var tab = "";
    for(var i = 0; tabClubes.length > 0; i++) {
        tab += `${tabClubes[0].clube} x ${tabClubes[tabClubes.length - 1].clube}\n`;
        tabClubes.shift();
        tabClubes.pop();
    }
    
    document.getElementById("outMostrar").textContent = tab;
}

var btTabela = document.getElementById("btTabela");
btTabela.addEventListener("click", tabela);