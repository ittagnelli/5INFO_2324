function nomi(arr){
    let nome=[];
    for(item of arr){
        nome.push(item.nome);
    }
    console.log(nome);
}

let arr=[
    {nome: 'Luca', eta: 18},
    {nome: 'Mario', eta: 30},
    {nome: 'Luigi', eta: 20}
];
nomi(arr);