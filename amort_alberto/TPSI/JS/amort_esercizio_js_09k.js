let Automobile= function(persone, velocità, rapporto_v, accensione)
{
    this.persone=persone;
    this.velocità=velocità;
    this.rapporto_v=rapporto_v; 
    this.accensione=accensione

    this.Personeabordo=function(n)
    {
        if(this.velocità>0)
        {
            console.log("Impossibile modificare il numero di persone")
        }
        else{
            this.persone=n;
        }


    }

    this.Impostarevelocità=function(n)
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

    this.aumentarapporto()=function()
    {
        if (this.rapporto_v<6)
        {
            this.rapporto_v++;
        }

    }

    this.diminuiscirapporto()=function()
    {
        if (this.rapporto_v<6)
        {
            this.rapporto_v--;
        }


    }

    this.pulsante()
    {
        this.pulsante=!this.pulsante
    }
    this.stampa()= function()
    {
        console.log(this)
    }


}

const main = () => {


let persone=0;
let velocità=0;
let rapporto_v=1;
let accensione=false

if (persone<5 && persone>0 && velocità>0 && velocità<180 && rapporto_v>1 && rapporto_v<6)
 {

let automobile = new Automobile(persone, velocità, rapporto_v, accensione);

automobile.pulsante();
if(pulsante==true)
{
    automobile.Personeabordo(2)
    automobile.Impostarevelocità(40)
    automobile.aumentarapporto(); 
    automobile.diminuiscirapporto();
}

}

automobile.stampa();
}

main();

