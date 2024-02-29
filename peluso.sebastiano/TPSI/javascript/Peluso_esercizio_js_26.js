

let array = [];

let N = 5;

function invertire(array,N) {

    let arrayCasuali = [];

    arrayCasuali = Array.from({length:N},() => Math.floor(Math.random() * 100)+1);

    arrayinvertito = [...arrayCasuali];

    arrayinvertito = arrayinvertito.reverse();

    return [arrayCasuali, arrayinvertito];
}

console.log("OUT ", invertire(array,N))