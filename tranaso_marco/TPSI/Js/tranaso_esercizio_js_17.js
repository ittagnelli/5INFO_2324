function filtra(stringa){
    return Array.from(stringa).filter(carattere=>carattere==carattere.toUpperCase())
}

let stringa="cHEewLtfLqOsWrdsOgtvfdcRwLffDff";

console.log(filtra(stringa));