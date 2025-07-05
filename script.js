//Script para criar um alerta de confirmação ao enviar o formulário
//seleciona o formulário
const form = document.querySelector("form");

// adiciona um evento de escuta para o envio do formulário
form.addEventListener("submit", function (event) {
    criarAlerta(); // chama a função desejada
});

// função que exibe um alerta ao enviar o formulário
function criarAlerta(event) {
    alert("Formulário enviado com sucesso!");
}