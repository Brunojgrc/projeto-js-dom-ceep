const deletarTarefa = (atualiza, id) => {
    const index = id;
    const tarefasCadastradas = JSON.parse(localStorage.getItem('tarefas'));
    tarefasCadastradas.splice(index, 1);
    localStorage.setItem('tarefas', JSON.stringify(tarefasCadastradas));
    atualiza();


    // const botaoDeletar = evento.target;
    // const tarefaCompleta = botaoDeletar.parentElement;

    // tarefaCompleta.remove(); //método que é usado para remover objetos da árvore
}

const BotaoDeletar = (atualiza, id) => {
    const botaoDeletar = document.createElement("button");
    botaoDeletar.classList.add("delete-button");// aplicando características do botão;
    botaoDeletar.innerText = "Deletar";

    botaoDeletar.addEventListener("click", ()=> deletarTarefa(atualiza, id));

    return botaoDeletar;

}


export default BotaoDeletar;
