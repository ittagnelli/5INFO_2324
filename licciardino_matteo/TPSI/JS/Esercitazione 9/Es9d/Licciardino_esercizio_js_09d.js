const sumNumber = (num) => {
    let sum = 0;
    num = parseInt(num, 10);

    if (isNaN(num)) {
        console.log(`Il parametro inserito non è un numero valido ${num}`);
        return;
    }

    for (let i = 0; i <= num; i++) {
        sum+=i;
    }

    return sum;
}

const main = () => {
    let ris_1 = sumNumber("6");
    console.log(`La somma dei numeri da 0 a 6 è: ${ris_1}`);

    let ris_2 = sumNumber(11);
    console.log(`La somma dei numeri da 0 a 11 è: ${ris_2}`);

    let ris_3 = sumNumber("4");
    console.log(`La somma dei numeri da 0 a 4 è: ${ris_3}`);

    let ris_4 = sumNumber(21);
    console.log(`La somma dei numeri da 0 a 21 è: ${ris_4}`);
}

main()