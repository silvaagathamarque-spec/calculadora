const numero1 = document.getElementById("numero1");
const numero2 = document.getElementById("numero2");
const operacao = document.getElementById("operacao");
const resultado = document.getElementById("resultado");
const botaoCalcular = document.getElementById("botao-calcular");

botaoCalcular.addEventListener("click", function () {

    const n1 = Number(numero1.value);
    const n2 = Number(numero2.value);
    const op = operacao.value;

    let resposta;

    switch (op) {

        case "+":
            resposta = n1 + n2;
            break;

        case "-":
            resposta = n1 - n2;
            break;

        case "x":
            resposta = n1 * n2;
            break;

        case "/":
            if (n2 === 0) {
                resposta = "Não pode dividir por zero";
            } else {
                resposta = n1 / n2;
            }
            break;

        default:
            resposta = "Operação inválida";
    }

    resultado.textContent = resposta;
});