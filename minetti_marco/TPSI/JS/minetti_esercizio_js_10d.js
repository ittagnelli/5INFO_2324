function capitalise_all (str) {
    let first = str.slice(0, 1);
    str = str.slice(1);
    str = first.toUpperCase() + str; 
    return str;
}


let string = "hello word!";
console.log(capitalise_all(string));