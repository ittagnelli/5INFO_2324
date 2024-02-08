// Definizione della classe Animale
let Animale = {
  nome: "",
  tipo: "",
  numeroZampe: 0,

  emitVerse: function () {
    console.log("Verso generico dell'animale.");
  },

  eats: function (cibo) {
    console.log(`L'animale sta mangiando ${cibo}.`);
  },

  enumera: function () {
    console.log("Attributi dell'oggetto Animale:");

        for (let attribute in this) {
            if ((this.hasOwnProperty(attribute)) && (this[attribute] !== 'function')) 
            console.log(attribute);
        }
    }
};

let cane = Object.create(Animale);
cane.nome = "Balto";
cane.tipo = "Cane";
cane.numeroZampe = 4;

let gatto = Object.create(Animale);
gatto.nome = "Leo";
gatto.tipo = "Gatto";
gatto.numeroZampe = 4;

cane.enumera();
gatto.enumera();

// Definizione della classe Automobile
let Automobile = {
  marca: "",
  modello: "",
  colore: "",

  accelerate: function () {
    console.log("L'automobile sta accelerando.");
  },

  brake: function () {
    console.log("L'automobile sta frenando.");
  },

  enumera: function () {
        console.log("Attributi dell'oggetto Automobile:");

        for (let attribute in this) {
            if ((this.hasOwnProperty(attribute)) && (this[attribute] !== 'function')) 
            console.log(attribute);
        }
    }
};

// Istanziamento di due oggetti della classe Automobile
let auto_1 = Object.create(Automobile);
auto_1.marca = "Toyota";
auto_1.modello = "Corolla";
auto_1.colore = "Blu";

let auto_2 = Object.create(Automobile);
auto_2.marca = "Honda";
auto_2.modello = "Civic";
auto_2.colore = "Rosso";

// Richiamo del metodo enumera() su ciascun oggetto Automobile
auto_1.enumera();
auto_2.enumera();

// Definizione della classe Poligono
let Poligono = {
  numeroLati: 0,
  lunghezzaLato: 0,

  A: function () {
    console.log("Calcolo dell'area del poligono.");
  },

  p: function () {
    console.log("Calcolo del perimetro del poligono.");
  },

  enumera: function () {
        console.log("Attributi dell'oggetto Poligono:");

        for (let attribute in this) {
            if ((this.hasOwnProperty(attribute)) && (this[attribute] !== 'function')) 
            console.log(attribute);
        }
  }
};

// Istanziamento di due oggetti della classe Poligono
let quadrato = Object.create(Poligono);
quadrato.numeroLati = 4;
quadrato.lunghezzaLato = 5;

let triangolo = Object.create(Poligono);
triangolo.numeroLati = 3;
triangolo.lunghezzaLato = 4;

// Richiamo del metodo enumera() su ciascun oggetto Poligono
quadrato.enumera();
triangolo.enumera();