function prod_quad(array) {
    let prodquad = array.reduce((a, b) => a * Math.pow(b, 2));
    console.log(prodquad);

}

let array = [1, 2, 3, 4, 5];

prod_quad(array);

