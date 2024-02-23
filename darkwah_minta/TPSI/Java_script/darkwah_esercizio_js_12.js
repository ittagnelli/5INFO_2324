//GIUSTO
let num1 = [1, 2, 3]
let num2 = [1, 2, 3]


function controlla(array1, array2)
{
    let b = true;
    for (let i = 0; i < array1.length; i++)
    {
        b = array1[i] == array2[i]
        if (b == false)
        {
            return (b)
        }
    }
    return (b)
}
/* let verifica = num1.every((n) == )
 */
console.log(controlla(num1, num2))