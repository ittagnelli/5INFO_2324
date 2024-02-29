function media(arr){
    let sum=arr.reduce((acc, curr)=>acc+curr.eta, 0);
    let media=sum/arr.length;
    console.log(media);
}

let arr=[
    {nome: 'Luca', eta: 18},
    {nome: 'Mario', eta: 30},
    {nome: 'Luigi', eta: 20}
];
media(arr);