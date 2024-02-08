let invert_case= function(array, l)
{
    for(let i=array.length; i>l; i--)
    {
        array.pop();
    }
    array.push(" ...");
    console.log(array.join(""));
}


let array=['C', 'i', 'a', 'o', ' ', 'M', 'o', 'n', 'd', 'o', ' ', 'l', 'a', ' ', 't', 'e', 'r', 'r', 'a', ' ', 'g', 'i', 'r', 'a']

invert_case(array, 10);