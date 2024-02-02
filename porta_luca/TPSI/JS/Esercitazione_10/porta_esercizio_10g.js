let str='ciao mondo come va?';
let str1=str.split(' ');
let r='';
for(var i=0;i<str1.length;i++){
    invert_case(str1[i]);
}
function invert_case(str){
    r=r+`${str[0]}${str.slice(1).toUpperCase()} `;
    return r;
}
console.log(r);