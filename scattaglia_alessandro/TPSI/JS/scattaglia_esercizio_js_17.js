function maiuscole(stringa) {
    let array_split = stringa.split('');
    let array = array_split.filter(lettera => lettera === lettera.toUpperCase() && lettera !== lettera.toLowerCase());
    console.log(array);
}
let stringa = "AbCdeFG";


maiuscole(stringa);