let str='ciao mondo come va?';
let str1=str.split(' ');
let r='';
for(var i=0;i<str1.length;i++){
    capitalize_all(str1[i]);
}
function capitalize_all(str){
    r=r+`${str[0].toUpperCase()}${str.slice(1)} `;
    return r;
}
console.log(r);