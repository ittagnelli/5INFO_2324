let str='ciao Luca';
capitalize(str);
function capitalize(str){
    console.log(`${str.charAt(0).toUpperCase()}${str.slice(1)}`);
}