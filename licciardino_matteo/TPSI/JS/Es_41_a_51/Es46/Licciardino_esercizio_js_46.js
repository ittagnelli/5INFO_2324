class Automobile{
    constructor(marca, modello, anno, colore, velocità){
        this.marca = marca;
        this.modello = modello;
        this.anno = anno;
        this.colore = colore;
        this.velocità = velocità;
    }

    accelerazione(addVelocity){
        this.velocità += addVelocity;
        console.log(`${this.marca} ${this.modello} ha accelerato a ${this.velocità} km/h.`);
    }

    frenata(){
        this.velocità = 0;
        console.log(`${this.marca} ${this.modello} ha frenato e si è fermato.`);
    }

    informazione(){
        console.log(`Marca: ${this.marca}, Modello: ${this.modello}, Anno: ${this.anno}, Colore: ${this.colore}, Velocità: ${this.velocità} km/h`);
    }
}

let auto = new Automobile('Fiat', '500', 2020, 'Bianca', 0);
auto.accelerazione(50);
auto.informazione();

let auto_2 = new Automobile('Toyota', 'Corolla', 2018, 'Nera', 30);
auto_2.frenata();
auto_2.informazione();

let auto_3 = new Automobile('BMW', 'X5', 2022, 'Grigia', 80);
auto_3.accelerazione(20);
auto_3.informazione();

let auto_4 = new Automobile('Ford', 'Focus', 2019, 'Blu', 0);
auto_4.accelerazione(70);
auto_4.informazione();

let auto_5 = new Automobile('Mercedes', 'C-Class', 2021, 'Argento', 60);
auto_5.frenata();
auto_5.informazione();