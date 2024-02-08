const special_print = (object) => {
    for (const key in object) {
        console.log(`nome ${key}`);
        console.log(`type ${typeof object[key]}`);
        typeof object[key] === 'string' ? console.log(object[key].toLowerCase()) : null;
        console.log('\n');
    }
};

let obj = {
    name: 'ciro',
    surname: 'esposito',
    age: 15,
    city: 'Napoli',
    amount_of_fingers: 8
}
special_print(obj);

let obj2 = {
    name: 'Mario',
    surname: 'Rossi',
    age: 17,
    city: 'Milano',
    amount_of_fingers: 10
}
special_print(obj2);