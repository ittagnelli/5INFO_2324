function crea(num, max){
    let arr=Array(num).fill(0), nuovo=[];
    arr.forEach((item)=>{
        item=Math.floor(Math.random()*max);
        nuovo.push(item);
    });
    console.log(`Array ${nuovo}, Array invertito ${nuovo.reverse()}`);
}

crea(5, 100);