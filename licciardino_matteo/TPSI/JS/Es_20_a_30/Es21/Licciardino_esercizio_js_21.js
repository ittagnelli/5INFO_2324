let N = 5;

function multiploZero(n){
    let vet = Array.from({length: 100}, () => Math.floor(Math.random() * 50) + 1);
    console.log(vet);

    return vet.map(num => num % n === 0 ? 0 : num)
}

let newVet = multiploZero(N);
console.log(newVet)