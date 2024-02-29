class poligono {
    constructor(n, l) {
        this.n_lati = n;
        this.len = l;
    }

    perimetro() { return this.len * this.n_lati }
    area() {
        switch (this.n_lati) {
            case 3:
                return (this.len * ((this.len ** 2 - (this.len / 2) ** 2) ** 0.5)) / 2; break;

            case 4:
                return this.len ** 2; break;

            case 5:
                return (this.len ** 2) * 1.72; break;

            case 6:
            case 7:
            case 8:
                return (this.perimetro() * (this.len * 0.866)) / 2; break;
            
            default:
                return null;
                break;
        }
    }
}

let triangle = new poligono(3, 15);
console.log('Triangolo');
console.log(`Perimetro:\t${triangle.perimetro()}\nArea:\t${triangle.area()}\n`);

let square = new poligono(4, 10);
console.log('Quadrato');
console.log(`Perimetro:\t${square.perimetro()}\nArea:\t${square.area()}\n`);

let pentagon = new poligono(5, 21);
console.log('Pentagono');
console.log(`Perimetro:\t${pentagon.perimetro()}\nArea:\t${pentagon.area()}\n`);

let hexagon = new poligono(6, 18);
console.log('Esagono');
console.log(`Perimetro:\t${hexagon.perimetro()}\nArea:\t${hexagon.area()}\n`);

let heptagon = new poligono(7, 9);
console.log('Ettagono');
console.log(`Perimetro:\t${heptagon.perimetro()}\nArea:\t${heptagon.area()}\n`);

let octagon = new poligono(8, 12);
console.log('Ottagono');
console.log(`Perimetro:\t${octagon.perimetro()}\nArea:\t${octagon.area()}\n`);