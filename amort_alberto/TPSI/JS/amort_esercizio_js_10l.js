
let concatenazione = function(str1, str2){
    str_finale=str2.substring(0, 1) + str1.substring(1) + " " + str1.substring(0,1) + str2.substring(1);
    return str_finale;
}


console.log(concatenazione("Ciao", "Prof"));