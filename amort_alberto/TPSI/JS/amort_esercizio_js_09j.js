
let stampa_attributi= function(attributi)
{
    
    for(let i in attributi)
    {
        if((typeof attributi[i])=="string")
        {
            attributi[i]=attributi[i].toLowerCase();
        }
        
        console.log(i, attributi[i], typeof attributi[i])

    }
    
}


let attributi= {
    cognome: "Amort",
    nome:"Alberto",
    età: 18,
    città: "Torino",
    classe: 5
}
stampa_attributi(attributi)

let attributi2= {
    cognome: "Amort",
    nome:"Davide",
    età: 5,
    città: "Torino",
    classe: 3
}
stampa_attributi(attributi2)