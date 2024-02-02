let fruits1 =
{
    nome: "mela",
    colore: "rossa",
    comprato: true,
    quant: 3,
    provenienza: "Roma",

}

function caratteristiche(frutta)
{
    let maiusc;
    for(let attr in frutta)
    {
        if (typeof(attr) == "string")
        {
            maiusc = String(frutta[attr]);
            maiusc = maiusc.toUpperCase();
            console.log("Il nome dell'attributo è: " + attr + ", di tipo: " + typeof(attr) + " e ha il valore di: " + maiusc)
        }
        else
        {
            console.log("Il nome dell'attributo è: " + attr + ", di tipo: " + typeof(attr) + " e ha il valore di: " + frutta[attr])

        }
        
    }
}

console.log(caratteristiche(fruits1))

let fruits2 =
{
    nome: "arancia",
    colore: "gialla",
    comprato: false,
    quant: 0,
    provenienza: "Spagna",

}

console.log(caratteristiche(fruits2))