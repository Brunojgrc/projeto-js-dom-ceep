import BotaoConcluir from "./componentes/concluirTarefa.js";
import BotaoDeletar from "./componentes/deletarTarefa.js";


//funcao para manipular os dados
const handleNovoItem = (evento) => {

    evento.preventDefault();

    const lista = document.querySelector("[data-list]");
    const input = document.querySelector("[data-form-input]");
    const valor = input.value;

    const calendario = document.querySelector("[data-form-date]");
    const data = moment(calendario.value);
    const dataFormatada = data.format("DD/MM/YYYY");

    const dados = {
        valor,
        dataFormatada
    };

    const criaTarefa = criarTarefa(dados);

    lista.appendChild(criaTarefa);
    input.value = " ";

}
//função para o que é visualização
const criarTarefa = ({valor, dataFormatada}) => {
    const tarefa = document.createElement("li");
    tarefa.classList.add("task");

    const conteudo = `<p class="content">${dataFormatada} * ${valor}</p>`;

    tarefa.innerHTML = conteudo;

    tarefa.appendChild(BotaoConcluir());
    tarefa.appendChild(BotaoDeletar());

    return tarefa;


}

const novaTarefa = document.querySelector("[data-form-button]");

novaTarefa.addEventListener("click", handleNovoItem);
