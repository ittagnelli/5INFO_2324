function capitalize_all(stringa) {
    let stringa2 = stringa.split(' ');
    let risualtato = "";
    for (let elemento of stringa2) {
        risualtato = risualtato + elemento.charAt(0).toUpperCase() + elemento.slice(1) + " ";
    }
    return risualtato;
}

let stringa = "ciao mondo la terra gira!!!";
console.log(capitalize_all(stringa));