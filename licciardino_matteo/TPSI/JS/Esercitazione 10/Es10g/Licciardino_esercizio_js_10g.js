let frase = "Ciamo Mondo!!!";

function invert_case(frase) {
    let lettere = frase.split(' ');

    for (let i = 0; i < lettere.length; i++) {
        let primaLettera = lettere[i].charAt(0).toLowerCase();
        lettere[i] = primaLettera + lettere[i].substring(1).toUpperCase();
    }

    return lettere.join(" ");
}

console.log(invert_case(frase));