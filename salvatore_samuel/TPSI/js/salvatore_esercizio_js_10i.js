function cerca(stringa) {
    if ((stringa.includes("coding") && stringa.includes("creativo")) == true)
        console.log(stringa);
    else 
        console.log("parole non trovate");
}

let stringa = "Ciao a tutto codin creativo l'Agnelli!!!";
console.log(cerca(stringa));