let fibonacci= function(n)
{
    let f1=0;
    let f2=1;
    let f;

    for(let i=2; i <=n; i++)
    {
        f=f1+f2;
        f1=f2;
        f2=f;
    }
    console.log(f);
}



fibonacci(8);
fibonacci(12);
fibonacci(9);
fibonacci(33);
fibonacci(45);