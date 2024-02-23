function abbreviazione(nome) {
    let space = nome.indexOf(" ");
    nome = nome.slice(0, space+2);
    space = nome.slice(-1);
    nome = nome.replace(nome[0], nome[0].toUpperCase());
    nome = nome.replace(space, space.toUpperCase()) + ".";
    return nome;
}

let nme = "antonio mancuso";

nme = abbreviazione(nme);

console.log(nme);