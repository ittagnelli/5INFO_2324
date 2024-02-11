let num = [1, 2, 3 ];
let num2 = [1, 2, 3];

function Equal(num, num2){
    let uguale = num.every((value, i) => value === num2[i]);
    console.log(uguale)
}

Equal(num, num2)