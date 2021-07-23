import { ordenaDatas } from "../service/data.js";
import { Tarefa } from "./criaTarefa.js";

export const criaData = (data) => {

    const tarefas = JSON.parse(localStorage.getItem('tarefas')) || [];
    const dataMoment = moment(data, 'DD/MM/YYYY');
    const dataTopo = document.createElement('li');
    const conteudo = `<p class="content-data">${dataMoment.format('DD/MM/YYYY')}</P>`;

    dataTopo.innerHTML = conteudo; //acessar o conteúdo interno de um elemento

    tarefas.forEach((tarefa => {
        const dia = moment(tarefa.dataFormatada, 'DD/MM/YYYY');
        const diff = dataMoment.diff(dia);
        if (diff == 0) {
            dataTopo.appendChild(Tarefa(tarefa));
        };
    }));

    return dataTopo;
};


