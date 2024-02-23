function primi_N(arr, num){
    let new_arr=[], i=0;
    for(item of arr){
        new_arr[i]=item;
        i++;
        if(i>=num){break;}
    }
    console.log(new_arr);
}

let arr=[1,2,3,4,5,6];
primi_N(arr, 5);