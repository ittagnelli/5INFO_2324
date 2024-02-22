let upper_case= function(array)
{
    let ris="";
    
    for(const stringa of array){
        let ASCII=stringa.charCodeAt(0);
        if(ASCII>=97 && ASCII<=122){
            ASCII -= 32;
        }
        stringa == String.fromCharCode(ASCII);

    }
    return ris; 

}


let array=['c', 'i', 'a', 'o', ' ', 'm', 'o', 'n', 'd', 'o', '!', '!', '!']
console.log(upper_case(array));
