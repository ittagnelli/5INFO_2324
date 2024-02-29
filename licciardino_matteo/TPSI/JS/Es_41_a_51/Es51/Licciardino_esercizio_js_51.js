class Automobile {
    constructor(persone, velocita, rapporto, stato) {
        this.persone = persone;
        this.velocita = velocita;
        this.rapporto = rapporto;
        this.stato = stato;
    }

    out_stato() {
        console.log(" ");
        console.log("STATO");
        console.log(`Persone: ${this.persone}`);
        console.log(`Velocita: ${this.velocita}`);
        console.log(`Rapporto: ${this.rapporto}`);
        console.log(`Stato: ${this.stato ? 'ON' : 'OFF'}`);
        console.log(" ");
    }

    imposta_persone(n) {
        if (this.velocita <= 0 && !this.stato) {
            this.persone = n;
            console.log(`Persone: ${this.persone}`);
        } else {
            console.log("Non posso modificare le persone a bordo");
        }
        this.out_stato();
    }

    imposta_velocita(n) {
        if (this.stato && n > 0 && Math.abs(n - this.velocita) <= 30) {
            this.velocita = n;
            console.log(`Velocita: ${this.velocita}`);
        } else {
            console.log("Non posso modificare la velocita, auto spenta o superato limite");
        }
        this.out_stato();
    }

    aumenta_rapporto() {
        if (this.rapporto < 5 && this.stato) {
            this.rapporto++;
            console.log(`Rapporto: ${this.rapporto}`);
        } else {
            console.log("Non posso aumentare il rapporto");
        }
        this.out_stato();
    }

    diminuisci_rapporto() {
        if (this.rapporto > 0 && this.stato) {
            this.rapporto--;
            console.log(`Rapporto: ${this.rapporto}`);
        } else {
            console.log("Non posso diminuire il rapporto");
        }
        this.out_stato();
    }

    alterna_stato() {
        this.stato = !this.stato;
        this.velocita = 0;
        console.log(`Stato: ${this.stato ? 'ON' : 'OFF'}`);
        this.out_stato();
    }
}

function main() {
    let auto = new Automobile(2, 3, 2, true);
    auto.out_stato(); 

    auto.imposta_persone(3);
    auto.imposta_velocita(45); 
    auto.aumenta_rapporto();
    auto.diminuisci_rapporto(); 
    auto.alterna_stato(); 
    auto.imposta_velocita(35); 
    auto.imposta_persone(3); 
    auto.alterna_stato(); 
    auto.imposta_velocita(45); 
}

main();