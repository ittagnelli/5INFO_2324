//GIUSTO


let cas = {
    0:"a",
    1:"b",
    2:"c",
    3:"d",
    4:"e",
    5:"f",
    6:"g",
    7:"h",
    8:"i",
    9:"j",
    10:"k",
    11:"l",
    12:"m",
    13:"n",
    14:"o",
    15:"p",
    16:"q",
    17:"r",
    18:"s",
    19:"t",
    20:"w",
    21:"x",
    22:"y",
    23:"z",

    24:"1",
    25:"2",
    26:"3",
    27:"4",
    28:"5",
    29:"6",
    30:"7",
    31:"8",
    32:"9"
}


function casuale(cas)
{
    let n
    let ris = ""


    for (let i = 0; i < 7; i++)
    {
        n = Math.floor(Math.random()* 32)

        ris = ris + cas[n]

    }
    return ris

}


console.log(casuale(cas))
