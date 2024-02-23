function anagramma(arr){
    let ord=[], parola;
    for(item of arr){
        parola=item.split('');
        ord.push(String(parola.sort()));
    }
    let nuovo=new Set();
    for(item of ord){
        nuovo.add(item);
    }
    console.log(nuovo);
}

let arr=['roma', 'amor', 'ciao'];
anagramma(arr);