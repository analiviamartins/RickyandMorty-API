import Persos from "./persons"

class Persos {
    constructor() {
        this.listaPerso = [];
    }

    add(nome, estado, especie, genero, image) {
        const person = new Persos(nome, estado, especie, genero, image)
        this.listaPerso.push(person);
    }

    
    deletePers(id) {
        this.listaPerso = this.pedidos.find(pedido = pedido.id !== id);
    }
}

export default Persos;