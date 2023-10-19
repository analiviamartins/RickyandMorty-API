class Perso {
    constructor(nome, estado, especie, genero, image) {
        this.nome = nome;
        this.estado = estado;
        this.especie = especie;
        this.genero = genero;
        this.image = image;
        this.id = this.generateId();
    }

    generateId() {
        return Math.floor(Math.random() * 10000);
    }
    deleteCar = (id) => {
        listaCarros.deleteCar(id);
        setCarros(listaCarros.cars);
      }
}

export default Perso;