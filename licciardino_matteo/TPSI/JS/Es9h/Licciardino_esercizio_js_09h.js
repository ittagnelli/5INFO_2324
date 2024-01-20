const numMax = (x, y) => x > y ? x : y;

const main = () => {
    let ris_1 = numMax(29, 97);
    console.log(`Il numero maggiore è: ${ris_1}`);

    let ris_2 = numMax(55, 34);
    console.log(`Il numero maggiore è: ${ris_2}`);

    let ris_3 = numMax(67, 78);
    console.log(`Il numero maggiore è: ${ris_3}`);
}

main()