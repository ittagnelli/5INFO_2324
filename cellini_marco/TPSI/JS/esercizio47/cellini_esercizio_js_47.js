class Car {
    constructor(m, mod, cc, a, p) {
        this.marca = m;
        this.modello = mod;
        this.cilindrata = cc;
        this.anno = a;
        this.posti = p;
    }

    plus_posti() { this.posti++; }
    plus_anno() { this.anno++; }
    enumera() {
        for (let v in this)
            console.log(`${v}:\t${this[v]}`);
    }
}

class Poligono {
    constructor(n, l, h) {
        this.n_lati = n;
        this.len = l;
        this.heigth = h;
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
    enumera() {
        for (let v in this)
            console.log(`${v}:\t${this[v]}`);
    }
}

class Animale {
    constructor(n, r, z) {
        this.nome = n;
        this.razza = r;
        this.n_zampe = z;
    }

    enumera() {
        for (let v in this)
            console.log(`${v}:\t${this[v]}`);
    }
    storpiatura() { this.n_zampe--; }
}

let cars = [
    new Car('Ford', 'Focus', 3500, 2020, 5),
    new Car('Mazda', 'mx-5', 2000, 2015, 2)
];

let figure_geometriche = [
    new Poligono(5, 21, 6),
    new Poligono(4, 10, 7)
];

let animals = [
    new Animale('tigre', 'felina', 4),
    new Animale('ornitorinco', 'boh', 4)
];

cars.forEach(e => e.enumera());
console.log('\n');
figure_geometriche.forEach(e => e.enumera());
console.log('\n');
animals.forEach(e => e.enumera());
console.log('\n');