"use client"
import Perso from "./persons"

class Persos {
    constructor() {
        this.listaPerso = [];
        
    }

    add(name, status, species, gender, image) {
        const person = new Perso(name, status, species, gender, image)
        this.listaPerso.push(person);

    }
    
    addApiData(dados) {
        this.listaPerso = this.listaPerso.concat(dados)

            
    }

    getListaPerso() {
        return this.listaPerso;
    }

    deletePers(person) {
        this.listaPerso = this.listaPerso.filter(perso => perso.id !== person.id);
    }

}

export default Persos;