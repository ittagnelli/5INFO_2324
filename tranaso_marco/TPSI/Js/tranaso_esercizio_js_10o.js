function stronca(str,n){

    if (str.length<=n)
    {
            return str;
    }
    console.log(str.slice(0,n) + "...")

}
stronca("Facciamo tanti esercizi che ci fanno bene", 5);
