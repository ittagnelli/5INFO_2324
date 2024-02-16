let sposta_elementi= function(array, N, M)
{
    let l1=array[M];
    let l2=array[N];
    array[M]=l2;  
    array[N]=l1;
    

    return array;



}

let array= [10, 20, 30, 40, 50];
console.log(sposta_elementi(array, 0, 2));