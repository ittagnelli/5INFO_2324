let str='Ciao Luca';
let str1=str.split('');
let r='', num;
for(var i=0;i<str1.length;i++){
    upper_case(str1[i]);
}
function upper_case(str){
    if(str.charCodeAt()>96 && str.charCodeAt()<123){
        num=str.charCodeAt()-32;
        r+=String.fromCharCode(num);
    }
    else{r+=str;}
    return r;
}
console.log(r);