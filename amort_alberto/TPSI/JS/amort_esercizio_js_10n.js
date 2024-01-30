let insert= function(str1, str2, N){

    stringa_finale=str1.substring(0, N) + " " + str2 + str1.substring(N, str1.length);
    return stringa_finale; 

}
console.log(insert("Facciamo tanti esercizi che ci fanno bene", "JavaScript", 23 ));