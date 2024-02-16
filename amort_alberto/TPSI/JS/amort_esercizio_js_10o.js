let tronca=function(stringa, N){

    if(stringa.length>N)
    {
    stringa=stringa.replace(stringa.substring(N, stringa.length), " ...");
    return stringa;
    }

}

console.log(tronca("Facciamo tanti esercizi che ci fanno bene" , 10));