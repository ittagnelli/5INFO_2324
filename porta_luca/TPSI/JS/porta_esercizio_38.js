function assegna(){
    return{
        nome: 'Egg',
        price: 0.25,
        quantity: 12
    };
}

let {nome, price, quantity}=assegna();
console.log(`${nome} ${price} ${quantity}`);