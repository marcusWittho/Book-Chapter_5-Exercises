var pacientes = [];

function addPacientes() {
    var inPaciente = document.getElementById("inPaciente");
    var outLista = document.getElementById("outLista");

    var nome = inPaciente.value;

    if(nome == "") {
        alert("Informe o nome do paciente");
        inPaciente.focus();
        return;
    }

    pacientes.push(nome);

    var lista = "";

    for(i = 0; i < pacientes.length; i++) {
        lista += `${(i + 1)}. ${pacientes[i]}\n`;
    }

    outLista.textContent = lista;

    inPaciente.value = "";
    inPaciente.focus();
}

var btAdicionar = document.getElementById("btAdicionar");
btAdicionar.addEventListener("click", addPacientes);

function addUrgencia() {
    var inPaciente = document.getElementById("inPaciente");
    var outLista = document.getElementById("outLista");

    var nome = inPaciente.value;

    if(nome == "") {
        alert("Informe o nome do paciente");
        inPaciente.focus();
        return;
    }

    for(let i = 0; i < pacientes.length; i++) {
        if(nome == pacientes[i]) {
            pacientes.pop(i);
        }
    }

    pacientes.unshift(nome);

    var lista = "";

    for(i = 0; i < pacientes.length; i++) {
        lista += `${(i + 1)}. ${pacientes[i]}\n`;
    }

    outLista.textContent = lista;

    inPaciente.value = "";
    inPaciente.focus();
}

var btUrgencia = document.getElementById("btUrgencia");
btUrgencia.addEventListener("click", addUrgencia);

function atenderPaciente() {
    if(pacientes.length == 0) {
        alert("Não há pacientes na lista de espera.")
        inPacientes.focus();
        return;
    }

    var outAtendimento = document.getElementById("outAtendimento");
    var outLista = document.getElementById("outLista");

    var atender = pacientes.shift();

    outAtendimento.textContent = atender;

    var lista = "";

    for( i = 0; i < pacientes.length; i++) {
        lista += `${(i + 1)}. ${pacientes[i]}\n`;
    }

    outLista.textContent = lista;

    inPaciente.value = "";
    inPaciente.focus();
}

var btAtender = document.getElementById("btAtender");
btAtender.addEventListener("click", atenderPaciente);