function concaten(str1, str2, num) {
    let risultato = str1.slice(0, num) + " " + str2 + " " + str1.slice(num);
    return(risultato);
}

let stringa1 = "sono uno studente di quinta", stringa2 = "non", n = 0;
console.log(concaten(stringa1, stringa2, n));