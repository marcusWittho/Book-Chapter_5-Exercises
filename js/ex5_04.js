var kids = [];

function addKids() {
    var inNome = document.getElementById("inNome");
    var inIdade = document.getElementById("inIdade");

    var nome = inNome.value;
    var idade = Number(inIdade.value);

    if(nome == "" || idade == 0 || isNaN(idade)) {
        alert("Preencha corretamente os campos.");
        inNome.focus();
        return;
    }

    kids.push({nome: nome, idade: idade});

    listarTodos();
}

var btAdicionar = document.getElementById("btAdicionar");
btAdicionar.addEventListener("click", addKids);

function listarTodos() {
    if(kids.length == 0) {
        alert("A lista está vazia.");
        return;
    }
    
    var lista = "";
    for(var i = 0; i < kids.length; i++) {
        lista += `${kids[i].nome} - ${kids[i].idade} anos.\n`;
    }

    document.getElementById("outLista").textContent = lista;

    inNome.value = "";
    inIdade.value = "";
    inNome.focus();
}

var btListar = document.getElementById("btListar");
btListar.addEventListener("click", listarTodos);

function porIdade() {
    if(kids.length == 0) {
        alert("A lista está vazia.");
        return;
    }

    var copia = kids.slice();
    copia.sort(function (a, b) {return a.idade - b.idade});
    
    var resumo = "";
    var aux = copia[0].idade;
    var nomes = [];

    for(var i = 0; i < copia.length; i++) {
        if(copia[i].idade == aux) {
            nomes.push(copia[i].nome);
        }else {
            resumo += `${aux} ano(s): ${nomes.length} criança(s) - `;
            resumo += `${(nomes.length / copia.length * 100).toFixed(2)}%\n`;
            resumo += `( ${nomes.join(", ")} )\n\n`;
            aux = copia[i].idade;
            nomes = [];
            nomes.push(copia[i].nome);
        }
    }

    resumo += `${aux} ano(s): ${nomes.length} criança(s) - `;
    resumo += `${(nomes.length / copia.length * 100).toFixed(2)}%\n`;
    resumo += `( ${nomes.join(", ")} )\n\n`;

    document.getElementById("outLista").textContent = resumo;
}

var btIdade = document.getElementById("btIdade");
btIdade.addEventListener("click", porIdade);