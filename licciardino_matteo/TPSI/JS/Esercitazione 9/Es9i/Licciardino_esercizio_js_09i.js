const numMax = (x, y, z) => 
(x > y ? (x > z ? a : c) : (y > z ? y : c));

const main = () => {
    let ris_1 = numMax(60, 100, 89);
    console.log(`Il numero maggiore è: ${ris_1}`);

    let ris_2 = numMax(28, 53, 22);
    console.log(`Il numero maggiore è: ${ris_2}`);

    let ris_3 = numMax(12, 91, 6);
    console.log(`Il numero maggiore è: ${ris_3}`);
}

main()