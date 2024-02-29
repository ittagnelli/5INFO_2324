const non_anagrammi = (l) => {
    let p_pure = new Map();
    l.map(e => p_pure.has(e) ? p_pure.set(e, p_pure.get(e) + 1) : p_pure.set(e, 1));
    p_pure.forEach((i, item) => console.log(item + ' si ripete ' + i + ' volte'));
};

let parole = "JavaScript è javascript un javascript un un è è di di di di di molto linguaggio molto bello. JavaScript è un linguaggio di alto livello";
non_anagrammi(parole.toLowerCase().split(" "));