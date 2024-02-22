let str='Luca Porta';
abbreviazione(str);
function abbreviazione(str){
    let str1=str.split(' ');
    console.log(`${str1[0]} ${str1[1].slice(0,1)}.`);
}