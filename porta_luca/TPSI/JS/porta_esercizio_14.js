function sposta(n, m){
    let arr=[1,2,3,4,5];
    let temp=arr[m];
    arr[m]=arr[n];
    arr[n]=temp;
    console.log(arr);
}

sposta(0, 2);