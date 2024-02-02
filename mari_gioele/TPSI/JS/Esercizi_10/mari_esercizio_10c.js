let str='ciao Gioele';
untokenize(str);
function untokenize(str){
    console.log(str.replaceAll(' ', '-'));
}