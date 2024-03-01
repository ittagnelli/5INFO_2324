function conta_ripetizioni_parola(str) {
    var parole = str.split(" ");
    
    var contatore = parole.reduce(function(acc, cur) {
        acc[cur] = (acc[cur] || 0) + 1;
        return acc;
    }, {});

    return contatore;
}

let str = "JavaScript è un linguaggio molto bello. JavaScript è un linguaggio di alto livello";

console.log(conta_ripetizioni_parola(str));
