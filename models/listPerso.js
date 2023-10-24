import persos from "./persons"

class Persos {
    constructor() {
        this.listaPerso = [];
    }

    add(nome, estado, especie, genero, image) {
        const person = new persos(nome, estado, especie, genero, image)
        this.listaPerso.push(person);
    }

    
    deletePers(id) {
        this.listaPerso = this.listaPerso.filter(pers = pers.id !== id.id);
        console.log(this.listaPerso)
    }
}

export default Persos;