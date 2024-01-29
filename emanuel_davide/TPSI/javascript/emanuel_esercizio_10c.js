let stringa="Nel mezzo del  cammin di nostra vita";

function untokenize(stringa){
    return stringa.replaceAll(" ","-");
}
console.log(untokenize(stringa));
