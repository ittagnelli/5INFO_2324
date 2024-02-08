let invert_case= function(array){
    let ris="";
    
    for(const stringa of array){
        let ASCII=stringa.charCodeAt(0);
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

let array=['C', 'i', 'a', 'o', ' ', 'M', 'o', 'n', 'd', 'o', '!', '!', '!']

console.log(invert_case(array));