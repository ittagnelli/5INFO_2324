function separa(arr, num){
    let primo=arr.slice(0, num+1);
    let secondo=arr.slice(num+1);
    primo.reverse();
    secondo.reverse();
    console.log(primo.concat(secondo));
}

let arr=[1,2,3,4];
separa(arr, 1);