//GIUSTO

let num = [1, 2, 3, 1, 2, 4]

function duplicati(n)
{
  

    let controllo



    for (let [l, item] of n. entries())
    {
        controllo = n.filter((value) => value == item)
      
        if (controllo.length > 1)
        {
            n.splice(l, 1)
            n.sort()
        }
    }
    return n

}


console.log(duplicati(num))