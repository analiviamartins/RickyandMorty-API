import Perso from "./persons";

class Persos {
  constructor() {
    this.listaPerso = [];
  }

  add(name, status, species, gender, image) {
    // Id aleatório entre 500 e 1000
    const id = Math.floor(Math.random() * (1000 - 500)) + 500;

    const person = new Perso(id, name, status, species, gender, image, false);
    console.log("Criou personagem");
    console.log(person);
    this.listaPerso.push(person);

    this.removeDuplicate();
  }

  async addApiData(dados) {
    await dados.map((person) => {
      const newCharacter = new Perso(
        person.id,
        person.name,
        person.status,
        person.species,
        person.gender,
        person.image,
        true
      );
      this.listaPerso.push(newCharacter);
    });

    this.removeDuplicate();
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

    if (person) {
      person.name = name;
      person.status = status;
      person.species = species;
      person.gender = gender;
      person.image = image;
    }

    return person;
  }

  removeDuplicate() {
    this.listaPerso = this.listaPerso.filter(
      (person, index, self) =>
        index === self.findIndex((t) => t.id === person.id)
    );
  }

  // Contador de personagens com api == false
  getContador() {
    let contador = 0;
    this.listaPerso.forEach((person) => {
      if (person.api == false) {
        contador++;
      }
    });
    return contador;
  }
}

export default Persos;
