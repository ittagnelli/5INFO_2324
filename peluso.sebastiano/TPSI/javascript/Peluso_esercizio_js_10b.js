

let stringa_email = "sebastiano.peluso@istitutoagnelli.it";

function projec_email(stringa_email) {

    
    let punto = stringa_email.indexOf(".");
    let hat = stringa_email.indexOf("@");

    let dominio = stringa_email.substring(hat);

    let cognome = stringa_email.substring(punto+1, hat);

    cognome = "...";

    let parteVisibile = stringa_email.substring(0, punto);

    let email_censurata = parteVisibile.concat(cognome, dominio);






    return email_censurata;

    

   
}


console.log("IN: ",stringa_email);


console.log("OUT: ",projec_email(stringa_email));




