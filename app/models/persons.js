class Persos {
    constructor(nome, estado, especie, local, episodio, image) {
        this.nome = nome;
        this.estado = estado;
        this.especie = especie;
        this.local = local;
        this.episodio = episodio;
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

export default Persos;