var erros = [];

var sorteado = Math.floor(Math.random() * 100) + 1;

const CHANCES = 6;

function apostarNum() {
    var inNum = document.getElementById("inNum");
    var num = Number(inNum.value);

    if(num <= 0 || num > 100 || isNaN(num)) {
        alert("Informe um número válido...");
        inNum.focus();
        return;
    }

    var outErros = document.getElementById("outErros");
    var outChances = document.getElementById("outChances");
    var outDica = document.getElementById("outDica");

    if(num == sorteado) {
        alert("Parabéns!!! Você ganhou!!");
        btApostar.disable = true;
        btJogar.className = "exibe";
        outDica.textContent = "Parabéns!! Número sorteado: " + sorteado;
    }else {
        if(erros.indexOf(num) >= 0) {
            alert(`Você já apostou o número ${num}. Tente outro...`);
        }else {
            erros.push(num);
            var numErros = erros.length;
            var numChances = CHANCES - numErros;
            outErros.textContent = `${numErros} (${erros.join(", ")})`;
            outChances.textContent = numChances;

            if(numChances == 0) {
                alert("Suas chances acabaram...");
                btApostar.disable = true;
                btJogar.className = "exibe";
                outDica.textContent = `Game Over!! Número sorteado: ${sorteado}`;
            }else {
                var dica = num < sorteado? "maior" : "menor";
                outDica.textContent = `Dica: Tente um número ${dica} que ${num}`;
            }
        }
    }
    inNum.value = "";
    inNum.focus();
}

var btApostar = document.getElementById("btApostar");
btApostar.addEventListener("click", apostarNum);

function jogarNovamente() {
    location.reload();
}
var btJogar = document.getElementById("btJogar");
btJogar.addEventListener("click", jogarNovamente);
