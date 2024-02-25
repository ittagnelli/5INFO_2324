

let stringa = "ciao mondo!!!";

function upper_case(stringa) {

    let stringa2 = "";
        

    for (let index = 0; index < stringa.length; index++) {


        let element = stringa[index].charCodeAt(0);

        if ((element >= 97) && (element <= 122)){
            
            element = element -32;
            

        } 

        stringa2 = stringa2 + String.fromCharCode(element);
        
        
        

        

        
        
    }

    return stringa2;

    

    
}



upper_case(stringa);console.log("IN",stringa);

console.log("OUT ", upper_case(stringa));
