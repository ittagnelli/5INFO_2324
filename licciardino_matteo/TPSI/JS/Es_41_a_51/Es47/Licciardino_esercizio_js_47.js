class Animale {
    constructor(nome, tipo, habitat) {
      this.nome = nome;
      this.tipo = tipo;
      this.habitat = habitat;
    }
  
    emitsSuond() {
      console.log(`${this.nome} emette un suono.`);
    }
  
    enumera() {
      for (let variabile in this) {
        if (this.hasOwnProperty(variabile)) {
          console.log(variabile);
        }
      }
    }
}

class Automobile {
    constructor(marca, modello, anno) {
      this.marca = marca;
      this.modello = modello;
      this.anno = anno;
    }
  
    accelerazione() {
      console.log(`${this.marca} ${this.modello} ${this.anno} sta accelerando.`);
    }
  
    enumera() {
      for (let variabile in this) {
        if (this.hasOwnProperty(variabile)) {
          console.log(variabile);
        }
      }
    }
}

class Poligono {
    constructor(tipo, numeroLati, area) {
      this.tipo = tipo;
      this.numeroLati = numeroLati;
      this.area = area;
    }
  
    calcPerimetro() {
      console.log(`Il perimetro del ${this.tipo} è ${this.numeroLati * 2} unità.`);
    }
  
    enumera() {
      for (let variabile in this) {
        if (this.hasOwnProperty(variabile)) {
          console.log(variabile);
        }
      }
    }
}

let animale = new Animale('Leone', 'Mammifero', 'Savana');
animale.enumera();

let auto = new Automobile('Fiat', '500', 2020);
auto.enumera();

let fiGeometric = new Poligono('Quadrato', 4, 16);
fiGeometric.enumera();

let animale_2 = new Animale('Aquila', 'Uccello', 'Montagna');
animale_2.enumera();

let auto_2 = new Automobile('Toyota', 'Corolla', 2018);
auto_2.enumera();

let fiGeometric_2 = new Poligono('Triangolo', 3, 9);
fiGeometric_2.enumera()