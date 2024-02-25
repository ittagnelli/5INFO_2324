
let string1 = "The quick brown fox jumps over the lazy dog";
let string2 = "the";

function tronca(string1,string2) {

    let lunghezzaStr1 = string1.length; 
    let lunghezzaStr2 = string2.length;

    let posizioneStr2_in_str1 = string1.indexOf(string2);

    
    let inizio_frase = string1.substring(0,posizioneStr2_in_str1);

    let spazio_stringa2 = posizioneStr2_in_str1 + lunghezzaStr2;

    let fine_frase = string1.substring(spazio_stringa2, lunghezzaStr1);

    string1 = inizio_frase.concat(fine_frase);
    

    

    


    return string1;

    
}

console.log("\n");
console.log(tronca(string1,string2));
console.log("\n");