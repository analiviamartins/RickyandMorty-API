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
}

export default Persos;