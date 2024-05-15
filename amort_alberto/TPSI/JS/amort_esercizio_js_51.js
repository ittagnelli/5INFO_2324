class Automobile
{
    constructor(persone, velocità, rapporto_v, accensione)
    {
    this.persone=persone;
    this.velocità=velocità;
    this.rapporto_v=rapporto_v; 
    this.pulsante=accensione;
    }

    Personeabordo(n)
    {
        if(this.velocità>0 && this.pulsante==true)
        {
            console.log("Impossibile modificare il numero di persone")
        }
        else{
            this.persone=n;
        }


    }

    Impostarevelocità(n)
    {
        if(n<this.velocità+30 && n>this.velocità-30)
        {
            console.log("Impossibile impostare la velocità")
        }
        else
        {
            this.velocità=n;
        }

    }

    aumentarapporto()
     {
        if (this.rapporto_v<6)
        {
            this.rapporto_v++;
        }

    }

    diminuiscirapporto()
    {
        if (this.rapporto_v<6)
        {
            this.rapporto_v--;
        }


    }

    premi()
    {
        this.pulsante=!this.pulsante;
        return this.pulsante;
    }
    stampa()
    {
        console.log(this);
    }


}


let persone=1;
let velocità=1;
let rapporto_v=2;
let accensione=false



let automobile = new Automobile(persone, velocità, rapporto_v, accensione);

let p=automobile.premi();
if(p==true)
{
    automobile.Personeabordo(2)
    automobile.Impostarevelocità(40)
    automobile.aumentarapporto(); 
    automobile.diminuiscirapporto();
}
automobile.stampa();






