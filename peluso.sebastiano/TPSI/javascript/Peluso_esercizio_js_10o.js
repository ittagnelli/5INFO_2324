
let str = "Facciamo tanti esercizi che ci fanno bene";


let N = 10;

function insert(str,N) {

    
    let lunghezza_str = str.length;

    if (lunghezza_str > N) {
        
        let fraseTroncata = str.substring(0,N).concat("...");

        return fraseTroncata;
    }
    else{
        return "la stringa non ha lunghezza superiore a N";
    }
    


    


    
}

console.log(insert(str,N));