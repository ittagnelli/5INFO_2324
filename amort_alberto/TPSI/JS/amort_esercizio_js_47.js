let enumera= function(){
    console.log(Object.keys(this));
}

class Automobili{
    constructor(marca, targa, prezzo)
    {
        this.marca=marca;
        this.targa=targa;
        this.prezzo=prezzo;

        this.enumera=enumera;

    }

    sconto()
    {
        this.prezzo/=5;
        console.log(this);
    }

    vendita()
    {
        console.log("Vendita effetuata");
    }


}

class Animale{
    constructor(specie, nome_scientifico, sesso)
    {
        this.specie=specie; 
        this.nome_scientifico=nome_scientifico;
        this.sesso=sesso;

        this.enumera=enumera;
    }

    tipo() {
        console.log(`Il nome scientifico di ${this.specie} è ${this.nome_scientifico} `);
    }

    recinto() {
        console.log(`Va nel recinto dei ${this.specie} `);
    }
}

class Poligono
{
    constructor(n_lato, l, tipo)
    {
        this.n_lato=n_lato;
        this.l=l;
        this.tipo=tipo;

        this.enumera=enumera;
    }

    Perimetro()
    {
        this.p=this.l*this.n_lato;
        console.log(`Perimetro: ${this.p}`);
    }

    tipo_p()
    {
        console.log(`Il poligono è un ${this.tipo}`);
    }
}


let auto1= new Automobili("500", "MRRTOKJIKFD34", 400);
auto1.sconto();
auto1.vendita();
auto1.enumera();

let auto2= new Automobili("Tesla", "KJMHGFV5678", 96);
auto2.sconto();
auto2.vendita();
auto2.enumera();

let an1=new Animale("Gatto", "Felis", "Maschio");
an1.tipo();
an1.recinto();
an1.enumera();

let an2 = new Animale("Cane", "Canis", "Femmina");
an2.tipo();
an2.recinto();
an2.enumera();

let pol1= new Poligono(4, 12, "Quadrato");
pol1.Perimetro();
pol1.tipo_p();
pol1.enumera()

let pol2= new Poligono(3, 7, "Triangolo");
pol2.Perimetro();
pol2.tipo_p();
pol2.enumera();

