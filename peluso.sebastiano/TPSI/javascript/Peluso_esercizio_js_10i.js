

let stringa = "Fare un codice in modo creativo rende il coding più facile!!!";

function cerca(stringa) {

    if (stringa.includes("coding") && (stringa.includes("creativo"))) {

        
        return stringa;
        
    }
    else{
        let messaggio = "parole non trovate";

        return messaggio;
    }

    
}


console.log("\n");
console.log(cerca(stringa));
console.log("\n");