let crea_set= function(array)
{
    let no_duplicati=new Set(array);
     let new_array=[...no_duplicati];

    return new_array;
}


let array=[1, 2, 5, 1, 2];
console.log(crea_set(array));