let tronca= function(stringa, N){
    array=stringa.split(" ");

    stringa_tronca= "";

    for(i=0; i<N; i++){
        stringa_tronca = stringa_tronca + " " + array[i];
    }

    return stringa_tronca; 
}


console.log(tronca("Facciamo tanti esercizi che ci fanno bene", 3));