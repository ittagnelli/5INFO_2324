function insert(str1,str2,n)
{
    console.log(str1.split(""))
    console.log(str1.slice(0,n).concat(str2) + str1.slice(n));
}

insert("Facciamo tanti esercizi che ci fanno bene", "Javascript", 5);