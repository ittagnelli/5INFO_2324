let string = "ccHEewLtfL2Oq sWrdsOgtvfdcRwLffDff";

function getUpperCase(string){
    return string.split("").filter(letter => "ABCDEFGHIJKLMNOPQRSTUVWXYZ".includes(letter)).join('');
}

let newString = getUpperCase(string)
console.log(newString)