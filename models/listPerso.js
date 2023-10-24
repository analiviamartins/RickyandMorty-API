"use client"
import Perso from "./persons"

class Persos {
    constructor() {
        this.listaPerso = [];
    }

    add(nome, estado, especie, genero, image) {
        const person = new Perso(nome, estado, especie, genero, image)
        this.listaPerso.push(person);
    }

    getListaPerso() {
        return this.listaPerso;
    }

    deletePers(person) {
        this.listaPerso = this.listaPerso.filter(perso => perso.id !== person.id);
    }
}

export default Persos;