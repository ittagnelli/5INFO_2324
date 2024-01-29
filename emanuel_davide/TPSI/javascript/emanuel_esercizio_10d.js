let stringa="ciao mondo";
function Capitalize(stringa){
    return stringa.replaceAll(stringa[0].toLowerCase(),stringa[0].toUpperCase());
}
console.log(Capitalize(stringa));