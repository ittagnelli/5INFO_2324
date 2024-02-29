function primo(num){
    let m=num;
    while(m>1){
        if(num%m==0){return false;}
        m--;
    }
    return true;
}

function riempi(arr){
    let new_arr=Array(0);
    arr.forEach(item => {
        if(primo(item)){new_arr.unshift(item);}
        else{new_arr.push(item);}
    });
    console.log(new_arr);
}

let arr=[1,2,3,4,5,6,7,8,9];
riempi(arr);