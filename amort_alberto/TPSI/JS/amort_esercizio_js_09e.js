
let calcolo = function(d1, d2)
{
    diffms=d1.millisecondi-d2.millisecondi
    diffsec=d1.secondi-d2.secondi;
    diffminuti=d1.minuti-d2.minuti;
    diffore=d1.ore-d2.ore;

    console.log(`${diffms} millisecondi, ${diffsec} secondi, ${diffminuti} minuti, ${diffore} ore `);  

}

let orario = function(millisecondi, secondi, minuti , ore ) {
    (this.millisecondi=millisecondi),
    (this.secondi=secondi),
    (this.minuti=minuti),
    (this.ore= ore)
    }


let or1= new orario("18", "4", "18", "16");
let or2= new orario("5", "1", "7", "14");
calcolo(or1, or2);
let or3= new orario("11", "25", "26", "16");
let or4= new orario("5", "7", "13", "5");
calcolo(or1, or2);