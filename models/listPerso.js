import Perso from "./persons"

class Persos {
    constructor() {
        this.listaPerso = [];
    }

    add(nome, estado, especie, genero, image) {
        const person = new Perso(nome, estado, especie, genero, image)
        this.listaPerso.push(person);
    }

    
    deletePers(id) {
        return this.listaPerso = this.listaPerso.filter(perso => perso.id !== id);
    }
    isURLValida(url) {
        if(url.match(/\.(jpeg|jpg|gif|png)$/) != null){
            return true;
        } else {
            return false;
        }
    }
}

export default Persos;