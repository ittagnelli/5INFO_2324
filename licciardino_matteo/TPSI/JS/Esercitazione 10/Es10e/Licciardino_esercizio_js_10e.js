let frase = "ciamo mondo la terra gira!!!";

function capitalize_all(frase) {
    let lettere = frase.split(' ');

    for (let i = 0; i < lettere.length; i++) {
        let primaLettera = lettere[i].charAt(0).toUpperCase();
        lettere[i] = primaLettera + lettere[i].substring(1).toLowerCase();
    }

    return lettere.join(" ");
}

console.log(capitalize_all(frase));