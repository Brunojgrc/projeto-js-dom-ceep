import { ordenaDatas, removeDatasRepetidas } from "../service/data.js";
import { criaData } from "./criaData.js";


export const carregaTarefa = () => {
    const lista = document.querySelector('[data-list]');

    /*pegar as tarefas, e caso vazio ele inicia com um array vazio. Chama o pipe e colocamos o array vazio.*/
    const tarefasCadastradas = JSON.parse(localStorage.getItem('tarefas')) || [];

    lista.innerHTML = " ";

    const dataUnicas = removeDatasRepetidas(tarefasCadastradas);
    ordenaDatas(dataUnicas);
    /*forEach para iterar sobre os itens, depois cada item é passado 
    para o componente Tarefa, que vai ser inserido dentro do elemento pai representado por lista.*/
    // ordenaDatas(dataUnicas);
    dataUnicas.forEach((dia) => {
        lista.appendChild(criaData(dia));
    });
};

