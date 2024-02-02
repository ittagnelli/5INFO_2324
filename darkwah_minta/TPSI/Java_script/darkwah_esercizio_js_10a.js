function abbreviazione (riga)
{
    let t = riga.split(" ");

    let primo = t[0]
    let secondo = t[1]

    secondo = secondo.charAt(0) + "."
 
    return primo + " " + secondo;
}


let string = "Antonio Mancuso"


console.log(abbreviazione(string))
