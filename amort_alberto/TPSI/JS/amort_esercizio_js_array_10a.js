let abbreviazione= function(array){
    let ind=array.indexOf(' ');
    let arrayf=[];
    array[ind+2]=array[ind+2].toUpperCase();
    for(let i=0; i<ind+2; i++)
    {
        arrayf[i]=array[i];
    }

    console.log(arrayf.join(""))


}


let nome= ['A', 'l', 'b', 'e', 'r', 't', 'o', ' ', 'A', 'm', 'o', 'r', 't'];
abbreviazione(nome)