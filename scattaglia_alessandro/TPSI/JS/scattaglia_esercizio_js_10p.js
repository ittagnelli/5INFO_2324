function tronca_frase (str, N) {
    let str1 = str.split(" ");
   let str2 = str1.slice(0,N);
   console.log(str2);
}

tronca_frase("la mamma fa gli gnocchi alla romana", 5);