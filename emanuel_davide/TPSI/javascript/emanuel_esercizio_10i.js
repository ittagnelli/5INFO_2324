let string="coding creativo ciao bella";

function searchUnderString(string){
    let parola=string.split(" ");

    if(parola.includes("coding")&&parola.includes("creativo")){
        return string
    }
    else{
        return"le parole non sono state trovate";
    }
}
console.log(searchUnderString(string));