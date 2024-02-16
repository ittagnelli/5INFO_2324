function tronca_frase(str,n){

    str1=str.split(" ");
    console.log(str1);
    str2=str1.slice(0,n);
    console.log(str2);

}
tronca_frase("Facciamo tanti esercizi che ci fanno bene", 6);
