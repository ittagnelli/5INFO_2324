let capitalize_all= function(array){
    for( i in array)
    {
        maiusc=array[i].slice(0, 1).toUpperCase()
        array[i]=maiusc.concat(array[i].slice(1, array.lenght));
        
    }

   
    return array.join(" ");




}

let array= ["ciamo", "mondo", "la", "terra", "gira", "!!!"]

console.log(capitalize_all(array));