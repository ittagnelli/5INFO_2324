function insert(str1, str2, N) {
    
    console.log(str1.slice(0, N).concat(str2) + str1.slice(N));

}
insert("facciamo tanti esercizi che ci fanno bene", " javascript", 23);