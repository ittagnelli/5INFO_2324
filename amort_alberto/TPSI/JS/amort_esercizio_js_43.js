class Poligono
{
    constructor(lunghezza, n_lati, apotema){
        this.lunghezza=lunghezza;
        this.n_lati=n_lati;
        this.apotema=apotema;

    }

    

    Perimetro(){
        this.perimetro=this.lunghezza*this.n_lati;
        return this.perimetro;   
    }

    Area()
    {
        this.area=(this.perimetro*this.apotema)/2;
        return this.area;   

    }


}

class Triangolo extends Poligono
{
    constructor(lunghezza)
    {
        super(lunghezza, 3, null);
        this.altezza=Math.sqrt((this.lunghezza**2)-((this.lunghezza/2)**2));
        
    }
    Area()
    {
        
        this.area=(this.lunghezza*this.altezza)/2;
        return this.area;  

    }


}

class Quadrato extends Poligono
{
    constructor(lunghezza)
    {
        super(lunghezza, 4, null);
        
    }

    Area()
    {
        this._area=this.lunghezza**2;
        return this.area;  
    }
}

class Pentagono extends Poligono
{
    constructor(lunghezza)
    {
        super(lunghezza, 5, 0.688);
    }

    
}

class Esagono extends Poligono
{
    constructor(lunghezza)
    {
        super(lunghezza, 6, 0.866);
        
    }

    
}

class Ettagono extends Poligono
{
    constructor(lunghezza)
    {
        super(lunghezza, 7, 1.038);
    }
}

class Ottagono extends Poligono
{
    constructor(lunghezza)
    {
        super(lunghezza, 8, 1.207);
    }
}



let triangolo= new Triangolo(15);
console.log("Triangolo: \nperimetro="+triangolo.Perimetro()+"\narea="+triangolo.Area()+"\n");



let quadrato=new Quadrato(10);
console.log("Quadrato: \nperimetro="+quadrato.Perimetro()+"\narea="+quadrato.Area()+"\n");


let pentagono=new Pentagono(21);
console.log("Pentagono: \nperimetro="+pentagono.Perimetro()+"\narea="+pentagono.Area()+"\n");


let esagono=new Esagono(18);
console.log("Esagono: \nperimetro="+esagono.Perimetro()+"\narea="+esagono.Area()+"\n");


let ettagono=new Ettagono(9);
console.log("Ettagono: \nperimetro="+ettagono.Perimetro()+"\narea="+ettagono.Area()+"\n");


let ottagono=new Ottagono(12);
console.log("Ettagono: \nperimetro="+ottagono.Perimetro()+"\narea="+ottagono.Area()+"\n");
