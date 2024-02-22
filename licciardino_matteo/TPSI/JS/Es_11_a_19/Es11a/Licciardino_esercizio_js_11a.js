let num = [1, 2, 3];

function ordinatoArray(num) {
    const ord = num.map((value, i, num2) => {
        console.log(num2[num.length - 1 - i]);
    });
}

ordinatoArray(num)