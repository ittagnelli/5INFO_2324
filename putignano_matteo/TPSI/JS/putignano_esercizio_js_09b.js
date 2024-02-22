let Automobile = function (modello, marca, anno, potenza, colore) {
    (this.modello = modello),
    (this.marca = marca),
    (this.anno = anno),
    (this.potenza = potenza),
    (this.colore = colore),
    (this.descrizione = function () {
        console.log(`Quest' auto è una ${this.modello} del ${this.anno} di colore ${this.colore} della marca ${this.marca} di potenza ${this.potenza}`);
    }),
    (this.auto = function () {
        console.log(`Quest' auto è una ${this.modello} del ${this.anno} della marca ${this.marca}`);
    }),
    (this.dettagli = function () {
        console.log(`Quest' auto è di colore ${this.colore} di potenza ${this.potenza}`);
    });
};

let automobile1 = new Automobile("Panda","FIAT","2006",60,"gialla");
let automobile2 = new Automobile("Tiguan","WW","2011",100,"grigia");
let automobile3 = new Automobile("F1","Ferrari","2019",250,"rossa");
let automobile4 = new Automobile("500L","FIAT","2015",70,"arancione");
let automobile5 = new Automobile("Smart","FIAT","2017",40,"bianca");

automobile1.descrizione()
automobile1.auto()
automobile1.dettagli()

automobile2.descrizione()
automobile2.auto()
automobile2.dettagli()

automobile3.descrizione()
automobile3.auto()
automobile3.dettagli()
