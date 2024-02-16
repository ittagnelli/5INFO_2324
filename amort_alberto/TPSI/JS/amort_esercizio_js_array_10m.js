let concateneteN=function(stringa, N){
    let array;
    array[0]=stringa;
    for(let i=0; i<N-1; i++)
    {
        array.push(stringa);

    }
    
    array.forEach(element =>{  return element ;    }
    );
}

console.log(concateneteN("ciao!", 4));