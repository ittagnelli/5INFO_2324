function array_rev(N) {

    let array = [];

    for (let i = 0; i < N; i++) {
        array.push(Math.floor(Math.random() * 10) + 1);
    }

    console.log(array);

    console.log(array.reverse());

}

array_rev(3);