let Automobili= function(marca, targa, propietario, colore, prezzo){
    (this.marca=marca),
    (this.targa=targa),
    (this.propietario=propietario),
    (this.colore=colore),
    (this.prezzo=prezzo),
    (this.sconto= function() {
        prezzo /= 5;
        console.log(`Prezzo: ${this.prezzo} `);


    }),
    (this.aumento= function() {
        prezzo *= 4;
        console.log(`Prezzo: ${this.prezzo} `);

        
    }),
    (this.vendita= function() {
        console.log("Vendita effetuata");
        
    });


};

let auto1= new Automobili("500", "MRRTOKJIKFD34", "Amort Giorgio", "verde", 400);
auto1.aumento();
auto1.sconto();
auto1.vendita();
let auto2= new Automobili("Tesla", "KJMHGFV5678", "Amort Tina", "rosso", 96);
auto2.aumento();
auto2.sconto();
auto2.vendita();
let auto3= new Automobili("500", "MHTDRRVJKJ8967", "Amort Giorgio", "blu", 50)
auto3.aumento();
auto3.sconto();
auto3.vendita();

let auto4= new Automobili("Fiat", "MJBGTTUYYHYF", "Amort Giorgio", "verde", 400)

auto4.aumento();
auto4.sconto();
auto4.vendita();

let auto5= new Automobili("500", "MRRTOKJIKFD34", "Amort Giorgio", "verde", 400)

auto5.aumento();
auto5.sconto();
auto5.vendita();
