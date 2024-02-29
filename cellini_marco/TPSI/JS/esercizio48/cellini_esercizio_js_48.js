class Orario {
    constructor(o1, o2, o3) {
        this.orario1 = o1;
        this.orario2 = o2;
        this.orario3 = o3;
    }

    diff_ms(o) {
        return {
            d1: o - this.orario1,
            d2: o - this.orario2,
            d3: o - this.orario3
        };
    }
    diff_s(o) {
        return {
            d1: (o - this.orario1) / 1000,
            d2: (o - this.orario2) / 1000,
            d3: (o - this.orario3) / 1000
        };
    }
    diff_m(o) {
        return {
            d1: (o - this.orario1) / 60000,
            d2: (o - this.orario2) / 60000,
            d3: (o - this.orario3) / 60000
        };
    }
    diff_h(o) {
        return {
            d1: (o - this.orario1) / (60000 * 60),
            d2: (o - this.orario2) / (60000 * 60),
            d3: (o - this.orario3) / (60000 * 60)
        };
    }
}

let orari = new Orario(new Date('2024-02-25T11:40:00.000Z'), new Date('2024-02-26T10:00:01.000Z'), new Date('2024-02-25T12:00:00.666Z'));

let ms = orari.diff_ms(new Date('2024-03-05T00:00:00.000Z'));
console.log(`Millisecondi:\n1)\t${ms.d1}\n2)\t${ms.d2}\n3)\t${ms.d3}`);

let s = orari.diff_s(new Date('2024-03-05T00:00:00.000Z'));
console.log(`\nSecondi:\n1)\t${s.d1}\n2)\t${s.d2}\n3)\t${s.d3}`);

let m = orari.diff_m(new Date('2024-03-05T00:00:00.000Z'));
console.log(`\nMinuti:\n1)\t${m.d1}\n2)\t${m.d2}\n3)\t${m.d3}`);

let h = orari.diff_h(new Date('2024-03-05T00:00:00.000Z'));
console.log(`\nOre:\n1)\t${h.d1}\n2)\t${h.d2}\n3)\t${h.d3}`);