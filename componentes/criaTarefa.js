import { carregaTarefa } from "./carregaTarefa.js";
import BotaoConcluir from "./concluirTarefa.js";
import BotaoDeletar from "./deletarTarefa.js";

//funcao para manipular os dados
export const handleNovoItem = (evento) => {

    evento.preventDefault(); //Cancela o evento se for cancelável, sem parar a propagação do mesmo.
    const tarefas = JSON.parse(localStorage.getItem('tarefas')) || []; //JSON.parse que vai transformar em objeto
   
    const input = document.querySelector("[data-form-input]");
    const valor = input.value;

    const calendario = document.querySelector("[data-form-date]");
    const data = moment(calendario.value);
    const horario = data.format('HH:mm');
    const dataFormatada = data.format("DD/MM/YYYY");
    const concluida = false; 
    
    const dados = {
        valor,
        dataFormatada,
        horario,
        concluida
    };

    const tarefasAtualizadas = [...tarefas, dados];

    localStorage.setItem('tarefas', JSON.stringify(tarefasAtualizadas));

    input.value = " ";

    carregaTarefa();

};

//função para o que é visualização/ exibição
export const Tarefa = ({ valor, horario, concluida}, id) => {
    const tarefa = document.createElement("li");

    const conteudo = `<p class="content">${horario} * ${valor}</p>`;
    if(concluida){
        tarefa.classList.add('done');  // aplicando características do CSS;

    }
        tarefa.classList.add('task')
    tarefa.innerHTML = conteudo;

    tarefa.appendChild(BotaoConcluir(carregaTarefa, id));
    tarefa.appendChild(BotaoDeletar(carregaTarefa, id));/*A função appendChild() insere um elemento filho (children) 
    ao elemento pai (parent) na última posição, ela auxilia na criação de um elemento DOM*/

    return tarefa;
};