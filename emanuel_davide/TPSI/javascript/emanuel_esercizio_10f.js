let stringa ="ciao mondo";

function UpperCase(stringa){
    let ris=" ";

    for(let i=0;i<stringa.length;i++){
        let carattereAscii=stringa[i].charCodeAt(0);

        if((carattereAscii>=97)&&(carattereAscii<=122))carattereAscii-=32;
       ris+=String.fromCharCode(carattereAscii);
    }
    return ris;
}
console.log(UpperCase(stringa));