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
    print() {
        for (let v in this)
            console.log(`${v}:\t${this[v]}`);
    }
}

let cars = [
    new Car('Ford', 'Fiesta', 1200, 1992, 5),
    new Car('Ford', 'Focus', 3500, 2020, 5),
    new Car('Mazda', 'mx-5', 2000, 2015, 2),
    new Car('Fiat', 'Tipo', 1300, 2023, 5),
    new Car('BMW', 'X6M', 5000, 2010, 7)
];

cars.forEach(e => {
    e.plus_posti();
    e.plus_anno();
    e.print();
    console.log();
});