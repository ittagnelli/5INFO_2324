let cerca_parole = function(stringa){
    if(stringa.includes("coding")==true && stringa.includes("creativo"))
    {
        return stringa;
    }

    else{
        return "parole non trovate";
    }

}


console.log(cerca_parole("Questo nuovo programma di coding è molto creativo"));
