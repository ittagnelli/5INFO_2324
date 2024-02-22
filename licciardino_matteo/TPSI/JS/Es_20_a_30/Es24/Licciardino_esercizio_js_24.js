let vet = [];

function generateRandom(vet){
    let caratteri = "abcdefghijklmnopqrstuvwxyz0123456789";
    let long = 7;

    for(let i = 0; i < long; i++){
        let randomIndex = Math.floor(Math.random() * caratteri.length);
        vet.push(caratteri[randomIndex]);
    }

    return vet
}

let newVet = generateRandom(vet);
console.log(newVet);