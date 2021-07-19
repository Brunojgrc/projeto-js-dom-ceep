import BotaoConcluir from "./componentes/concluirTarefa.js";
import BotaoDeletar from "./componentes/deletarTarefa.js";


const criarTarefa = (evento) => {
    evento.preventDefault();

    const lista = document.querySelector("[data-list]")
    const input = document.querySelector("[data-form-input]");
    const valor = input.value;
    const tarefa = document.createElement("li");
    tarefa.classList.add("task");

    const conteudo = `<p class="content">${valor}</p>`;

    tarefa.innerHTML = conteudo;

    tarefa.appendChild(BotaoConcluir());
    tarefa.appendChild(BotaoDeletar());
    lista.appendChild(tarefa);
    input.value = " ";

}

const novaTarefa = document.querySelector("[data-form-button]");

novaTarefa.addEventListener("click", criarTarefa);
