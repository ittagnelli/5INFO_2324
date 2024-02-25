
let stringa = "ccHEewLtfL2Oq sWrdsOgtvfdcRwLffDff";

let array = [];

function isUpperCase(char){

    if(!("0123456789".includes(char))){

		if(char == char.toUpperCase()){

			return true;

		}else{
            
			return false;
		}
	}
}

function estrai(stringa) {

    let array_stringa = Array.from(stringa);

    let testo_estratto =  array_stringa.filter((element) => isUpperCase(element));


    return testo_estratto;
    
}

console.log("OUT ", estrai(stringa))