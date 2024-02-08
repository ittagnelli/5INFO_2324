let str = "ciao mondo!!!"

function capitalize(stringa)
{
    lett = (str.charAt(0)).toUpperCase()
    return lett + str.substring(1);
}

console.log(capitalize(str))