function ordina(len, max){
    let arr=Array(len);
    let nuovo=[];
    for(item of arr){
        item=Math.floor(Math.random()*max);
        nuovo.push(item);
    }
    console.log(nuovo.sort((a, b)=>b-a));
}

ordina(5, 20);