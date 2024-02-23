function abbreviazione(str) {
    let splitted = str.split(" ");
    splitted[0][0] = splitted[0][0].toUpperCase();
    return `${splitted[0]} ${splitted[1][0].toUpperCase()}.`;
}

console.log(abbreviazione("andrea canale"))
