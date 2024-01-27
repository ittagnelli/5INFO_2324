

let speed = 0;

let Animale = function(razza, sesso, colore) {

    this.razza=razza,
    this.sesso=sesso,
    this.colore=colore,

    (this.speak = function () {
        console.log(`Animale :  ${this.razza} ${this.sesso} ${this.colore} `);
      });

    
      this.mangia();
      this.verso();


};




let Poligono = function(numero_lati, lunghezza_lato) {

    this.lunghezza_lato=lunghezza_lato,
    this.numero_lati=numero_lati,
    

    (this.speak = function () {
        console.log(`Il Poligono :  ${this.numero_lati} ${this.lunghezza_lato}`);
      });


    this.Tipo();
    this.distanza_bersaglio();


};

let Automobile = function(modello, marcha, targa) {

    this.modello=modello,
    this.marcha=marcha,
    this.targa=targa,

    (this.enumera = () => Object.keys(this)),


    (this.speak = function () {
        console.log(`L'Automobile :  ${this.modello} ${this.marcha}`);
      });


      this.accellera = () => speed++;
      this.frena = () => speed--;

      


};


let Cane = Animale("Labrador", "maschio", "nero");
let Cavallo = Animale("corsa", "maschio", "Bianco nero");

console.log(Panda.enumera());



let Panda = Automobile("Panda", "Fiat","ED562UH");
let civic = Automobile("Kona", "Honda","GD452TU");

