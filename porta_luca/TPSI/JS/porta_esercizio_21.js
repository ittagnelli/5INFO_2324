function riempi(arr, num){
    for(item of arr){
        if(item%num==0){
            item=0;
        }
    }
    console.log(arr);
}

let arr=Array(100).fill(Math.floor(Math.random()*50));
riempi(arr, 2);