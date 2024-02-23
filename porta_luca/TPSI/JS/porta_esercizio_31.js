function setta(arr){
    let nuovo=new Set();
    for(item of arr){
        nuovo.add(item);
    }
    console.log(nuovo);
}

let arr=[1,1,2,2,3,3,4,4,5,5];
setta(arr);