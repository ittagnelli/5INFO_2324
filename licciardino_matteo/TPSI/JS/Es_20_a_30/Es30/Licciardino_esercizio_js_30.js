let vet = [3, 7, 9, 12, 15, 18, 20];
let N = 7;
let M = 15;

function filVet(vet, N, M){
    let newVet = vet.filter((element) => {
        return element >= N && element <= M;
    });

    return newVet;
}

let vet2 = filVet(vet, N, M);
console.log(vet2);