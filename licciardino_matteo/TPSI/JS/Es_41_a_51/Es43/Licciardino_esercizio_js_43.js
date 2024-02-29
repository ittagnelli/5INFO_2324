class Poligono{
    constructor(lato, valore, apotema){
        this.lato = lato;
        this.valore = valore;
        this.apotema = apotema;
    }

    perimetro(){return this.lato * this.valore}
    area(){return ((this.perimetro() * this.apotema) / 2)}
}

class Triangolo extends Poligono{
    constructor(valore){
        super(3, valore, 0.289);
        this.altezza = Math.sqrt((Math.pow(valore, 2) - Math.pow((valore/2), 2)))
    }

    area(){return ((this.valore * this.altezza) / 2)}
}

class Quadrato extends Poligono {
    constructor(valore) {
        super(4, valore, 0.5);
    }

    area() {return Math.pow(this.valore, 2)}
}

class Pentagono extends Poligono {
    constructor(valore) {
        super(5, valore, 0.688);
    }
}

class Esagono extends Poligono {
    constructor(valore) {
        super(6, valore, 0.866);
    }
}

class Ottagono extends Poligono {
    constructor(valore) {
        super(8, valore, 1.207);
    }
}

class Ettagono extends Poligono {
    constructor(valore) {
        super(7, valore, 1.038);
    }
}

let triangolo, quadrato, pentagono, ettagono, ottagono;

triangolo = new Triangolo(15);
console.log("L'area del triangolo è: " + Math.round(triangolo.area()) + " " + "Il perimetro del triangolo è: " + triangolo.perimetro());

quadrato = new Quadrato(10);
console.log("L'area del quadrato è: " + quadrato.area() + " " + "Il perimetro del quadrato è: " + quadrato.perimetro());

pentagono = new Pentagono(21);
console.log("L'area del pentagono è: " + Math.round(pentagono.area()) + " " + "Il perimetro del pentagono è: " + pentagono.perimetro());

esagono = new Esagono(18);
console.log("L'area del esagono è: " + Math.round(esagono.area()) + " " + "Il perimetro del esagono è: " + esagono.perimetro());

ettagono = new Ettagono(9);
console.log("L'area del ettagono è: " + Math.round(ettagono.area()) + " " + "Il perimetro del ettagono è: " + ettagono.perimetro());

ottagono = new Ottagono(12);
console.log("L'area del ottagono è: " + Math.round(ottagono.area()) + " " + "Il perimetro del ottagono è: " + ottagono.perimetro());