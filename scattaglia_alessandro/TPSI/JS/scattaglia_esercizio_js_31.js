function set_duplicati(array) {
    let set = new Set(array);

    let ris = Array.from(set);
    console.log(ris);
}

let array = [1, 2, 3, 4, 1, 2, 5];

set_duplicati(array);
