let togli_doppi=function(N)
{
    let array=[];
    for(const item of N)
    {
        if(!array.includes(item))
        {
            array.push(item);
        }
    }

    return array;
}

let N=[1, 2, 3, 1, 2, 4];
console.log(togli_doppi(N));