function upper_case(str) {
    let risultato = '';

    for (let i = 0; i < str.length; i++) {
       
        let charCode = str.charCodeAt(i);

       
        if (charCode >= 97 && charCode <= 122) {
            risultato += String.fromCharCode(charCode - 32);
        } else {
           
            risultato += str.charAt(i);
        }
    }

    return risultato;
}
console.log(upper_case('ciao mamma mia')); 
