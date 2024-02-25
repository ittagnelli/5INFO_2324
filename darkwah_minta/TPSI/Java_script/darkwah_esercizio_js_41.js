//GIUSTO


class Quadrato {
    constructor(l)
    {
        this.lato = l;
    }
    set lato(valore){
        this._lato = valore;
    }
    get perimetro(){
        return this._lato * 4
    }
    
}


let pol = new Quadrato(3)
console.log(pol.perimetro)