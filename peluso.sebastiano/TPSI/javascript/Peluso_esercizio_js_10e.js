
let stringa = "ciao mondo la terra gira!!!";

function capitalize_all(stringa) {

   

    let array_stringhe = stringa.split(" ");

    for (let index = 0; index < array_stringhe.length; index++) {

        let carattere = array_stringhe[index].charAt(0).toUpperCase();

        //let stringa2 = array_stringhe[index].replace(array_stringhe[index].charAt(0),carattere);

        array_stringhe[index] = carattere.concat(array_stringhe[index].substring(1), " ");

        

        


        
        
    }

    let stringa_finale = array_stringhe.join(" ")


    return stringa_finale;




    
}

console.log("IN: ",stringa);
    


console.log("OUT: ",capitalize_all(stringa));

