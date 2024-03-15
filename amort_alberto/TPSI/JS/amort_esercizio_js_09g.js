
let calcolo = function(d1, d2, d3)
{
    if(d1.ore<d2.ore)
    {
        
        
        if(d1.ore<d3.ore)
        {
            {console.log(` ${d1.secondi} secondi, ${d1.minuti} minuti, ${d1.ore} ore`)}
        }
        else if(d3.ore<d2.ore){
            {console.log(` ${d3.secondi} secondi, ${d3.minuti} minuti, ${d3.ore} ore`)}

        }
        
    }
    else 
    {
        if(d1.ore==d2.ore)
        {
            if(d1.minuti<d2.minuti)
            {
                {console.log(` ${d1.secondi} secondi, ${d1.minuti} minuti, ${d1.ore} ore`)}
            }
            else{
                if(d1.minuti==d2.minuti)
                {
                    {console.log(` ${d1.secondi} secondi, ${d1.minuti} minuti, ${d1.ore} ore`)}
                }
                else{
                    
                }

        }

        }
        {console.log(` ${d2.secondi} secondi, ${d2.minuti} minuti, ${d2.ore} ore`)}
    }

    


}

let orario = function( secondi, minuti , ore ) {
    
    (this.secondi=secondi),
    (this.minuti=minuti),
    (this.ore= ore)
    }



calcolo(new orario("18", "4", "18"), new orario("5", "7", "14"), new orario("11", "25", "14"));
let or3= new orario("11", "25", "21");
let or4= new orario("5", "7", "13");
calcolo(or3, or4);