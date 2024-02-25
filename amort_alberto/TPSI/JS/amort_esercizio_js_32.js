let crea_array= function(array)
{
    let map= new Map;

    for(let i of array)
    {
        let ordine=i.split('').sort().join('');
        map.set(ordine, i);
    }
    return map.values();
    
}

let array= ['omar', 'sette', 'roma', 'teste', 'mora', 'colazione', 'locazione'];
console.log(crea_array(array));