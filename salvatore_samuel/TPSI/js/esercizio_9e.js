function calcolo(data1, data2) {
    let d1ms = data1.ore *60 *60*1000 + data1.minuti*60*1000 + data1.secondi*1000;
    let d2ms = data2.ore *60 *60*1000 + data2.minuti*60*1000 + data2.secondi*1000;
    let sum = d1ms + d2ms; 
    return(sum);
}


let data1 = {
    ore: "1",
    minuti:"43",
    secondi:"11",
}; 
let data2 = {
    ore: "1",
    minuti:"43",
    secondi:"11",
}; 

console.log(calcolo(data1, data2));
