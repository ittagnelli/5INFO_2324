function isPrimo(n){
    for(let i=2; i<n && n%i!=0; i++)
    {
        if(n%i===0)
        {
            return false;
        }

        return true;

        
    }
}



let ordina= function(array)
{
    let primo=array.filter(n => isPrimo(n));
    let nprimo=array.filter(n=> !isPrimo(n));
    return primo.concat(nprimo);
}




let array= [1, 4, 7, 3, 11, 12, 20];
console.log(ordina(array));