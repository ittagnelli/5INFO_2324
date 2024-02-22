let inversione= function(n){
    
        let n2= [];
        n2=n.map((value, i) => n.length-i);
        return n2;
}



let n= [1, 2, 3];
console.log(inversione(n));