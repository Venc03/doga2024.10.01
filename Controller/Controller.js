import Model from "../Model/Model.js";
import View from "../View/View.js";

export default class Controller {
    constructor(){
        const MODEL = new Model();
        const list = MODEL.getLIST();
        const szulElem = $(".oldal");
        const VIEW = new View(list, szulElem);
    }
}