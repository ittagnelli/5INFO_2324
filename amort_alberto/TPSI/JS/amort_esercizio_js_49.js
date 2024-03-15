class Fibonacci{
    constructor(n)
    {
        this.n=n
    }

    calcolo()
    {
        let f0=0;
        let f1=1;

        let fibonacci;

        for(let i=2; i<this.n; i++)
        {
            fibonacci=f0+f1;
            f0=f1;
            f1=fibonacci;
        }

        return(fibonacci);

    }


    
}



let n1=Math.floor(Math.random()*24);
let f1= new Fibonacci(n1);
console.log(`Fibonacci ${n1}=${f1.calcolo()}`);

let n2=Math.floor(Math.random()*24);
let f2= new Fibonacci(n2);
console.log(`Fibonacci ${n2}=${f2.calcolo()}`);


let n3=Math.floor(Math.random()*24);
let f3= new Fibonacci(n3);
console.log(`Fibonacci ${n3}=${f3.calcolo()}`);

let n4=Math.floor(Math.random()*24);
let f4= new Fibonacci(n4);
console.log(`Fibonacci ${n4}=${f4.calcolo()}`);


let n5=Math.floor(Math.random()*24);
let f5= new Fibonacci(n5);
console.log(`Fibonacci ${n5}=${f5.calcolo()}`);