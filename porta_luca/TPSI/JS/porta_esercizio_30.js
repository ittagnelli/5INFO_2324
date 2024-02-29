function immetti(arr, min, max){
    let nuovo=[];
    for(item of arr){
        if(item>=min && item<=max){
            nuovo.push(item);
        }
    }
    console.log(nuovo);
}

let arr=[1,2,3,4,5,6,7,8,9];
immetti(arr, 4, 6);