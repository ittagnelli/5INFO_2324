function elimina(arr, val){
    let ar=[], j=0;
    for(let i=0;i<arr.length;i++){
        if(arr[i]!=val){ar[j]=arr[i];j++}
    }
    console.log(ar);
}

let arr=[1,2,3,4];
elimina(arr, 3);