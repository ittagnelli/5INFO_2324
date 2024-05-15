class Orario
{
    constructor(secondi, minuti, ore)
    {
        this.secondi=secondi;
    this.minuti=minuti;
    this.ore= ore;
    
    }

    confronto(d2)
    {
        if(this.ore<d2.ore || (this.ore==d2.ore && this.minuti<d2.minuti) || (this.ore==d2.ore && this.minuti==d2.minuti && this.secondi<d2.secondi))
        {
                return this;
            
        }

        else if (this.ore>d2.ore || (this.ore==d2.ore && this.minuti>d2.minuti) || (this.ore==d2.ore && this.minuti==d2.minuti && this.secondi>d2.secondi)){
            return d2;
        }


        



    }
}

let or1=new Orario(18, 4, 18);
let or2=new Orario(5, 7, 14);

let minore=or1.confronto(or2);

console.log(`L'orario minimo: ${minore.ore} ore: ${minore.minuti} minuti: ${minore.secondi} secondi`);

let or3=new Orario(11, 25, 21);
let or4=new Orario(5, 7, 13);

let minore2=or3.confronto(or4);
console.log(`L'orario minimo: ${minore2.ore} ore: ${minore2.minuti} minuti: ${minore2.secondi} secondi`);
