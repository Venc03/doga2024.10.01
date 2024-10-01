export default class Kartya{

    #auto= {}
    #szuloElem

    constructor(adat, szuloElem){ 
        this.#auto = adat
        this.#szuloElem = szuloElem
        this.autoKiir()
    }

    autoKiir(){
        this.#szuloElem.append(`
            <div class="card col-lg-4 col-md-6">
                <div class="card-body">
                    ID: <h3 class="card-title">${this.#auto.id}</h3>
                    Rendszam: <p class="card-text">${this.#auto.rendszam}</p>
                    Fajta: <p class="card-text">${this.#auto.fajta}</p>
                    Tipus: <p class="card-text">${this.#auto.tipus}</p>
                    Kor: <p class="card-text">${this.#auto.kor}</p>
                </div>
                <button class="valaszt btn btn-success">Kiválaszt</button> 
            </div>
        `)
    }



}