let random= function()
{
    let array=[];
    let scelta= "abcdefghijklmnopqrstuvwxyz0123456789"
    for(let i=0; i<7; i++)
    {
        let index=Math.floor(Math.random()*scelta.length);
        array.push(scelta[index]);
    }

    return array;
}

console.log(random());