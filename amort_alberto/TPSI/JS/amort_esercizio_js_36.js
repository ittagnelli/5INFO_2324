let map_vocali= function(stringa)
{
    let map= new Map();
    let vocali=['a', 'e', 'i', 'o', 'u'];

    for(let letter of stringa)
    {
        if(vocali.includes(letter))
        {
            if(map.has(letter))
            {
                map.set(letter, map.get(letter)+1);
            }
            else
            {
                map.set(letter, 1);
            }
        }
    }
    return map;
}
let stringa= "supercalifragilistichespiralidoso";
console.log(map_vocali(stringa));