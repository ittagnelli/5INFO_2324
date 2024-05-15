let tronca=function(stringa, L){
    stringa=stringa.replace(stringa.substring(L), " ...");
    return stringa;

}

console.log(tronca("Ciao Mondo la terra gira!!!" , 10));