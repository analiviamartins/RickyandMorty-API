class Persos {
    constructor() {
        this.listaPerso = [];
    }

    add(perso) {
        this.listaPerso.push(perso);
    }

    
    deletePers(id) {
        return this.listaPerso = this.listaPerso.filter(perso => perso.id !== id);
    }
}

export default Persos;