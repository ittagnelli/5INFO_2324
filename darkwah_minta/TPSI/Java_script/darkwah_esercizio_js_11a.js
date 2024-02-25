//GIUSTO

let num = [1, 2, 3]
let num2;

function ordina(array, array2)
{
    for (let i = num.length; i >= 0; i--)
    {
        let metti = []

        array2 = array.map((valore) => array[array.length - 1 - array.indexOf(valore)])
    }

    return array2
}


console.log(ordina(num, num2))
