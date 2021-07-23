
const concluirTarefa = (atualiza, id) => {
    const tarefasCadastradas = JSON.parse(localStorage.getItem('tarefas'));

    tarefasCadastradas[id].concluida = !tarefasCadastradas[id].concluida;

    localStorage.setItem('tarefas', JSON.stringify(tarefasCadastradas)); 

    atualiza();
};




//Criando o botão, como é componente começa com o maiúsculo
const BotaoConcluir = (atualiza, id) => {

    const botaoConcluir = document.createElement("button");
    // Aplicando CSS
    botaoConcluir.classList.add("check-button");// aplicando características do botão;
    botaoConcluir.innerText = "Concluir";

    botaoConcluir.addEventListener("click", ()=>concluirTarefa(atualiza, id));

    return botaoConcluir;
};

export default BotaoConcluir;
