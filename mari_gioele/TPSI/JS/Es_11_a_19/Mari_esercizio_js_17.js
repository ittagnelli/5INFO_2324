let string = "qwertyuiopoiuytrdrgthjklòlokijuhy";

function getUpperCase(string){
    return string.split("").filter(letter => "ABCDEFGHIJKLMNOPQRSTUVWXYZ".includes(letter)).join('');
}

let newString = getUpperCase(string)
console.log(newString)