
const BotaoDeletar = () => {
    const botaoDeletar = document.createElement("button");
    botaoDeletar.classList.add("delete-button");// aplicando características do botão;
    botaoDeletar.innerText = "Deletar";

    botaoDeletar.addEventListener("click", deletarTarefa);

    return botaoDeletar;

}
const deletarTarefa = (evento) => {
    const botaoDeletar = evento.target;
    const tarefaCompleta = botaoDeletar.parentElement;

    tarefaCompleta.remove(); //método que é usado para remover objetos da árvore
}

export default BotaoDeletar;
