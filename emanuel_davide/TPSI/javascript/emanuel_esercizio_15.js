let array=[3,1,2,3,4,5,3];
let arrayFinale = [];
num = 3;


array.forEach(element => {
    if(element!=3){
        arrayFinale.push(element);
    }
});

console.log(arrayFinale);