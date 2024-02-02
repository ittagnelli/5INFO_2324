let str = "Nel mezzo del cammin di nostra vita"

function untokenize(stringa)
{
    str = str.replaceAll(" ", "-")
    return str;
}

console.log(untokenize(str))