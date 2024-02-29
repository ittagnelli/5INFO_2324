class Orario {
    constructor(h, m, s) {
        this.ora = h;
        this.minuti = m;
        this.secondi = s;
    }

    min_ora(ora1, ora2) {
        let l = [this, ora1, ora2];
        
        l.sort((a, b) => a.ora - b.ora);
        if (l[0].ora != l[1].ora) return l[0];

        l = l.filter(e => e.ora == l[0].ora);
        l.sort((a, b) => a.minuti - b.minuti);
        if (l[0].minuti != l[1].minuti) return l[0];

        l = l.filter(e => e.minuti == l[0].minuti);
        l.sort((a, b) => a.secondi - b.secondi);
        return l[0];
    }
}

let ore = [new Orario(12, 30, 0), new Orario(11, 20, 10)];
console.log('min date:\t', ore[0].min_ora(new Orario(17, 29, 21), new Orario(12, 29, 40)));

console.log('min date:\t', ore[1].min_ora(new Orario(11, 21, 21), new Orario(11, 20, 7)));