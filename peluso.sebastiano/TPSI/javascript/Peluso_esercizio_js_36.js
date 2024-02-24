
let stringa = "supercalifragilistichespiralidoso";

function mappa(stringa) {


    let map = new Map([['a',0],['e',0],['i',0],['o',0],['u',0]]);

    let array_stringa = [];

    let values;

    array_stringa = stringa.split("");

    array_stringa.forEach(element => {

        if (element == 'a') {
           values = map.get(element);
           values = values+1;
           map.delete(element);
           map.set(element,values);

        }
        else if(element == 'e'){
            values = map.get(element);
            values = values+1;
            map.delete(element);
            map.set(element,values);
        }else if(element == 'i'){
            values = map.get(element);
            values = values+1;
            map.delete(element);
            map.set(element,values);
        }else if(element == 'o'){
            values = map.get(element);
            values = values+1;
            map.delete(element);
            map.set(element,values);
        }else if(element == 'u'){
            values = map.get(element);
            values = values+1;
            map.delete(element);
            map.set(element,values);
        }
        
    });


    return map;
}

console.log("OUT", mappa(stringa));