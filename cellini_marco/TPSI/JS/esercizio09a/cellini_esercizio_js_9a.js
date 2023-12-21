let ciro = {
    "name": "Ciro",
    "surname": "Esposito",
    "age": 69,
}

let keys = Object.keys(ciro);

for(let k = 0; k < keys.length; k++) {
    console.log(`key => ${keys[k]}\nvalue => ${ciro[keys[k]]}\n`);
}