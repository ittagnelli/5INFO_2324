function prodotto(arr){
    let ris=1;
    for(item of arr){
        ris*=item**2;
    }
    console.log(ris);
}

let arr=[1,1,1,1,1];
prodotto(arr);