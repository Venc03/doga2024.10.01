import { LIST } from "../Model/data"

export default class View {

    #list
    #szuloElem

    constructor(){
        this.#list = LIST;
        this.#szuloElem = $('.oldal');
        this.megjelenit(this.#list, this.#szuloElem);
    }

    egysor(index, elem, lista){
        let txt = '';
        txt += `<div>${lista[index].elem}<div>`;
        return txt;
    }

    megjelenit(lista, szuloElem){
        let txt = '<div>';
        lista.forEach((elem, index) => {
            this.egysor(index, elem, szuloElem)
        });
        txt += '<button class="csokkent"><h1>Idoben visszautazas<h1></button>'
        txt += '<button class="kosar"><h1>Kosarba<h1></button>'
        txt += '</div>';
        szuloElem.append(txt);
    }
}