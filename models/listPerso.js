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
    getEdicaoPorId(id) {
        const person = this.listaPerso.find((person) => person.id == id);

        return person;
    }
    atualizarEdicao(id, name, status, species, gender, image) {
        const person = this.getEdicaoPorId(id);

        if (person) {
            person.name = name;
            person.status = status;
            person.species = species;
            person.gender = gender;
            person.image = image;
        }

        this.atualizarPerso();

        return person;
    }
    atualizarPerso() {
        this.name = "";
        this.status = "";
        this.species = "";
        this.gender = "";
        this.image = "";

        this.listaPerso.map((person) => {
            if ((person.id != "name")|| person.id != "status" || person.id != "species" || person.id != "gender" || person.id != "image") {
                this.name = this.name;
                this.name = "";
                this.status = "";
                this.species = "";
                this.gender = "";
                this.image = "";
            } else {
                this.name = this.name;
                this.status = this.status;
                this.species = this.species;
                this.gender = this.gender;
                this.image = this.image;
            }
        });
    }
}



export default Persos;