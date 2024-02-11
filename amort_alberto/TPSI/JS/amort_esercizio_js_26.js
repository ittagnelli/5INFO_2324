let array_random= function(N)
{
    let array=[];
    for(let i=0; i<N; i++)
    {
        array.push(Math.floor(Math.random()*100));
    }
    console.log(array);
    
    console.log(array.reverse());


}


array_random(5);