let crea_array= function(stringa)
{
    let array=stringa.split('');
    array=array.filter((a) => a.charCodeAt(0)>=65 && a.charCodeAt(0)<=90);
    return array;
}

let stringa= "ccHEewLtfL2Oq sWrdsOgtvfdcRwLffDff";
console.log(crea_array(stringa));