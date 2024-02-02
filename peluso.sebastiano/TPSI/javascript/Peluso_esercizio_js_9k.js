
let velocità = 0;


let Automobile = function(n_persone, velocità, marcia, acceso){

    this.n_persone = n_persone;
    this.velocità = velocità;
    this.marcia = 1;
    this.acceso = false;


    this.PersoneAbordo = function(n){
        if ((velocità > 0) && ((n > 5) && (n < 0))) {

            console.log("impossibile aggiungere persone");
        }
        else{
            this.n_persone = n;
        }
        

        console.log(this);
    }


    this.velocitàImpostata = function(n){

        let diff = this.velocità - n;

        if ((n >= 0) && (n <= 180)) {
            if (diff < 30 && diff > -30) {

                this.velocità = n;

                
            }            
        }

        console.log(this);
    }

    this.marciasali = function(){


        if (this.marcia <= 5) {
            this.marcia++;
            
        }


        console.log(this);
        

    }


    this.marciascendi = function(){


        if (this.marcia >= 1) {
            this.marcia--;
            
        }


        console.log(this);
        

    }


    this.Accensione = function(){

        this.acceso = !this.acceso;


        console.log(this);
    }




}


const main = () => {
    
    let automobile = new Automobile(0,0,1,false);

    automobile.Accensione();
    automobile.PersoneAbordo(5);
    automobile.velocitàImpostata(20);
    automobile.marciasali();


}



main();




