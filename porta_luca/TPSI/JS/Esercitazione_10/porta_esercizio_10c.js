let str='ciao Luca';
untokenize(str);
function untokenize(str){
    console.log(str.replaceAll(' ', '-'));
}