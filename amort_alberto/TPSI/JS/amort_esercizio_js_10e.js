let capitalize_all= function(stringa){
    array=stringa.split(' ');
    for( i in array)
    {
        maiusc=array[i].slice(0, 1).toUpperCase()
        array[i]=maiusc.concat(array[i].slice(1, array.lenght));
        
    }

    stringa='';

    for( i in array)
    {
        
        stringa=stringa.concat(' ', array[i]);
        
    }    

    return stringa;




}

console.log(capitalize_all("ciamo mondo la terra gira!!!"));