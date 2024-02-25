let c_univoci=function(stringa)
{
    let set= new Set();
    for(const letter of stringa)
    {
        set.add(letter);
    }

    let parola=[];

    set.forEach(i => parola.push(i));
    parola=parola.join("");

    return parola;
}

let stringa= "supercalifragilistichespiralidoso";
console.log(c_univoci(stringa));