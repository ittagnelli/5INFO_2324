let invert_case= function(stringa){
    let ris="";
    
    for(i=0; i<stringa.length ; i++){
        let ASCII=stringa[i].charCodeAt(0);
        if(ASCII>=97 && ASCII<=122){
            ASCII -= 32;
        }

        else if(ASCII>=65 && ASCII<=90){
            ASCII+=32;
        }
        ris += String.fromCharCode(ASCII);

    }
    return ris; 



}

console.log(invert_case("Ciao Mondo!!!"));