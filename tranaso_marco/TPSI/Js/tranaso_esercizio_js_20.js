function ultimi_n_elementi(array, n) {
    return array.splice(n);
}

const array=[1, 2, 3, 4, 5];
const n=3;
console.log(ultimi_n_elementi(array, n)); 
