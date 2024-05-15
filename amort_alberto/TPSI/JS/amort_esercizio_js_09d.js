

let numero= function(n)
{
    (this.numero=n),
    (this.calcola=function(){
        let somma=0;
        for(let i=0; i<=this.numero; i++)
        {somma += i;}
        console.log(`Somma: ${somma} `);
    }
    )

}






let n1=new numero("19")
n1.calcola();
let n2=new numero(5)
n2.calcola()
let n3=new numero(30)
n3.calcola()