class Quadrato
{
    constructor(lato)
    {
        this.lato=lato;

    }

    set lato(val){
        this._lato=val;
    }
    


    get perimetro()
    {
        return this._lato*2;
    }

    get area()
    {
        return this._lato**2;
    }
}

let q= new Quadrato(7);
console.log("Perimetro: ", q.perimetro);
alert("Area: " + q.area);