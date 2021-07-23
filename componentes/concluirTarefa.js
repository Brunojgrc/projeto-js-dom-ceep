
//Criando o botão, como é componente começa com o maiúsculo
const BotaoConcluir = () => {

    const botaoConcluir = document.createElement("button");
    // Aplicando CSS
    botaoConcluir.classList.add("check-button");// aplicando características do botão;
    botaoConcluir.innerText = "Concluir";

    botaoConcluir.addEventListener("click", concluirTarefa);

    return botaoConcluir;
};

const concluirTarefa = (evento) => {
    const botaoConcluir = evento.target;
    const tarefaCompleta = botaoConcluir.parentElement;

    tarefaCompleta.classList.toggle("done"); // aplicando características do CSS;
};

export default BotaoConcluir;