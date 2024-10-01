import Model from "../Model/Model.js";
import View from "../View/View.js";

export default class Controller {
    constructor(){
        const MODEL = new Model();
        const VIEW = new View();

        MODEL.getLIST();
    }
}