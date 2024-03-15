class Automobili{
    constructor(marca, targa, propietario, colore, prezzo)
    {
        this.marca=marca;
        this.targa=targa;
        this.propietario=propietario;
        this.colore=colore;
        this.prezzo=prezzo;

    }

    sconto()
    {
        this.prezzo/=5;
        console.log(this);
    }

    aumento()
    {
        this.prezzo*=4;
        console.log(this);
    }

    vendita()
    {
        console.log("Vendita effetuata");
    }


}


let auto1= new Automobili("500", "MRRTOKJIKFD34", "Amort Giorgio", "verde", 400);
auto1.sconto();
auto1.aumento();
auto1.vendita();

let auto2= new Automobili("Tesla", "KJMHGFV5678", "Amort Tina", "rosso", 96);
auto2.sconto();
auto2.aumento();
auto2.vendita();

let auto3= new Automobili("500", "MHTDRRVJKJ8967", "Amort Giorgio", "blu", 50)
auto3.sconto();
auto3.aumento();
auto3.vendita();

let auto4= new Automobili("Fiat", "MJBGTTUYYHYF", "Amort Giorgio", "verde", 400)
auto4.sconto();
auto4.aumento();
auto4.vendita();

let auto5= new Automobili("500", "MRRTOKJIKFD34", "Amort Giorgio", "verde", 400)
auto5.sconto();
auto5.aumento();
auto5.vendita();

