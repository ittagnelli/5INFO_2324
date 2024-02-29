function concaten(str, str1) {
    let risultato = str1.charAt(0) + str.substring(1) + " " + str.charAt(0) + str1.substring(1);
    return(risultato);
}

let stringa1 = "Hello", stringa2 = "there";
console.log(concaten(stringa1, stringa2));