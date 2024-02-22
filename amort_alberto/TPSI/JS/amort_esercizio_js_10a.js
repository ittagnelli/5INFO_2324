let abbreviazione = function (stringa)
{
    nome_cognome= stringa.split(' ');
    nome=nome_cognome[0];
    cognome= nome_cognome[1]
    abbr=nome.concat(" ", cognome.substring(0, 1), ".")

    return abbr;

    

}

console.log(abbreviazione('Alberto Amort'))