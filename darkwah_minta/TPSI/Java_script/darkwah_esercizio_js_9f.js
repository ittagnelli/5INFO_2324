let a = 12;
let b = 4;
let ris = 0;


function fibonacci (primo, secondo)
{
    ris = primo + secondo;
    return ris + "\n";
}

for (let i = 0; i < 5; i++)
{
    a+=i
    b+=i
    console.log("Soluzione " + i + "\t" + fibonacci(a, b));

}