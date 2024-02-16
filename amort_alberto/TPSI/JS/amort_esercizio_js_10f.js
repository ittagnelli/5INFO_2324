let upper_case= function(stringa){
    let ris="";
    
    for(i=0; i<stringa.length ; i++){
        let ASCII=stringa[i].charCodeAt(0);
        if(ASCII>=97 && ASCII<=122){
            ASCII -= 32;
        }
        ris += String.fromCharCode(ASCII);

    }
    return ris; 



}

console.log(upper_case("ciamo mondo!!!"));