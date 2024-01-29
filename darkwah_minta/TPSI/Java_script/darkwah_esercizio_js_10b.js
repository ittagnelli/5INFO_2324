
function protect_gmail(ind)
{
    let fin = ind.split(".")

    let primo = fin[0];
    let secondo = fin[1].split("@");
    secondo = secondo[1]
    let terzo = fin[2]
    

    return primo + "...@" + secondo + "." + terzo
    
}



let gm = "antonio.mancuso@istitutoagnelli.it"

console.log(protect_gmail(gm))