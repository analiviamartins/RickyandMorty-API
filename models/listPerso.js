import Perso from "./persons";

class Persos {
  constructor() {
    this.listaPerso = [];
  }

  add(name, status, species, gender, image) {
    // Id aleatório entre 500 e 1000
    const id = Math.floor(Math.random() * (1000 - 500)) + 500;

    const person = new Perso(id, name, status, species, gender, image);
    this.listaPerso.push(person);
  }

  async addApiData(dados) {
    await dados.map((person) => {
      const newCharacter = new Perso(
        person.id,
        person.name,
        person.status,
        person.species,
        person.gender,
        person.image
      );
      this.listaPerso.push(newCharacter);
    });
  }

  getListaPerso() {
    return this.listaPerso;
  }

  deletePers(person) {
    this.listaPerso = this.listaPerso.filter((perso) => perso.id !== person.id);
  }
  getPersoPorId(id) {
    const person = this.listaPerso.find((person) => person.id == id);

    return person;
  }

  atualizarPerso(id, name, status, species, gender, image) {
    const person = this.getPersoPorId(id);
    console.log("Encontrou?");
    console.log(person);

    if (person) {
      person.name = name;
      person.status = status;
      person.species = species;
      person.gender = gender;
      person.image = image;
    }

    return person;
  }
}

export default Persos;
