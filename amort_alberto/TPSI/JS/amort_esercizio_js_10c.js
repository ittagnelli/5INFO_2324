let untokenize= function (stringa)
{
    stringa=stringa.replaceAll(' ', '-');
    return stringa
}


console.log(untokenize('Nel mezzo del cammin di nostra vita'));