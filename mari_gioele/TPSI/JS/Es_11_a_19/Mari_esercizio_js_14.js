let num = [10, 20, 30, 40, 50];
let N = 0;
let M = 2;

function Sposta(num, N, M){
   let vet = num.splice(N, 1)[0];
   num.splice(M, 0, vet);
   return vet
}

let newVet = Sposta(num, N, M);
console.log(num); 