function cut(vet, n) {
    let new_vet = vet.splice(0, n)
    return new_vet;
}

let vett = [0, 1, 2, 3, 4, 5, 6, 7];
let N = 4;
console.log(cut(vett, N));