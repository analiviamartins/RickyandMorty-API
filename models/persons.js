class Perso {
    constructor(name, status, species, gender, image) {
        this.name = name;
        this.status = status;
        this.species = species;
        this.gender = gender;
        this.image = image;
        this.id = this.generateId();

        
    }

    generateId() {
        return Math.floor(Math.random() * 10000);
    }
     
}

export default Perso;