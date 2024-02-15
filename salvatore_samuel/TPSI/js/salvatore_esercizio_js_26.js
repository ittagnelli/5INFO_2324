function generaNumeroCasualeMax(N) {
    let vettor = Array.from({ length: N }, () => Math.floor(Math.random() * 11));
    return vettor;
}

let n = 5;
let vett = generaNumeroCasualeMax(n);
let vettinvertito = [...vett].reverse();
console.log(vett, " ", vettinvertito);