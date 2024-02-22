let insert=function(array, N)
{
    for(i=array.length; i>N; i--)
    {
        array.pop();

    }

    array.push(" ...")
    return array.join("");
}

let array= ["F", "a", "c", "c", "i", "a", "m", "o", " ", "t", "a", "n", "t", "i", " ", "e", "s", "e", "r", "c", "i", "z", "i", " " ,"c", "h", "e", " ", "c", "i", " ", "f", "a", "n", "n", "o", " ", "b", "e", "n", "e"];
console.log(insert(array, 10));