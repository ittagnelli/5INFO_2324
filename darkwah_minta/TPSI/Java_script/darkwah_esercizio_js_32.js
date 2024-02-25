let str = ['omar', 'sette', 'roma', 'teste', 'mora', 'colazione', 'locazione']

function no_anagr(n)
{
    let c = 0
    let somma = 0
    for (let l of n)
    {
        
        for (let d of l)
        {
            somma += d.charCodeAt(c)
            
        }
        console.log(somma)
        somma =0

        c++
    }
}

console.log(no_anagr(str))