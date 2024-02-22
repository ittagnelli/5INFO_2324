
let concatenazione = function(str1, str2){
    str_finale=str2.substring(0, 2) + str1.substring(2, str1.length) + " " + str1.substring(0,2) + str2.substring(2, str2.length);
    return str_finale;
}


console.log(concatenazione("Ciao", "Prof"));