
let N =3;
let M=100;

function ordine_casuali(N,M) {

    let array_casuali = [];

    array_casuali = Array.from({length:N}, ()=> Math.floor(Math.random()*100)+1);

    let array_ordinati = [];

    array_ordinati = array_casuali.sort((a,b)=> b-a);


    return array_ordinati;



}

console.log("OUT", ordine_casuali(N,M));