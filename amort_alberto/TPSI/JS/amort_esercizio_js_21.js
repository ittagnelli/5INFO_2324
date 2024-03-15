let crea_array= function(array, N)
{
    for(let i=0; i<100; i++)
    { 
        array.push(Math.floor(Math.random() * 50)+1);
    }

    console.log(array);

    for(const [i, item] of array.entries())
    {
        if(item%N==0)
        {
            array[i]=0;
        }
    }

    

    return array; 
}

let array= [];
console.log(crea_array(array, 5))