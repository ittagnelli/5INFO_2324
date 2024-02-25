let capitalize=function(array)
{
    array[0]=(array.at(0)).toUpperCase()
    return array.join("")
}


let array=['c', 'i', 'a', 'o', ' ', 'm', 'o', 'n', 'd', 'o', '!', '!', '!']
console.log(capitalize(array))