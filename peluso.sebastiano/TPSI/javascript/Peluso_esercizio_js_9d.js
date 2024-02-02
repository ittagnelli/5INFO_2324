


let somma = 0;


const Somma = (numero) => {

    somma = 0;

    for (let i = 0; i <= numero; i++) {
        
        somma += i;
        
    }

    return somma;


}

const main = () =>{

    console.log("la somma è",Somma(24));
    console.log("la somma è",Somma(35));
    console.log("la somma è",Somma(10));
    
    
}

main();

