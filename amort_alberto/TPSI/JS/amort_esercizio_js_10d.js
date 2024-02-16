let capitalize= function(stringa)
{
    array=stringa.split('');
    prima_lettera=array[0].toUpperCase();
    stringa=prima_lettera.concat(stringa.substring(1, array.lenght))
    return stringa;


    
}


console.log(capitalize('ciao mondo!!!'));


