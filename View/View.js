import { LIST } from "../Model/data.js"
import Kartya from "./Kartya.js";

export default class View {

    #list
    #szuloElem

    constructor(LIST, szuloElem){
        this.#list = LIST;
        this.#szuloElem = szuloElem
        this.megjelenit();
    }

    megjelenit(){
        LIST.forEach((elem) => {
            new Kartya(elem, this.#szuloElem)
        });
    }
}