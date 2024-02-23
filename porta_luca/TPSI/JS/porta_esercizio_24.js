function riempi(num){
    let arr=Array(7).fill(0), val;
    for(item of arr){
        val=Math.floor(Math.random()*num);
        if(val>=97){
            item=String.fromCharCode(val);
        }
    }
    console.log(arr);
}

riempi(122);