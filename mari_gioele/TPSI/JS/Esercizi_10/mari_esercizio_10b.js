let str='gioele.mari@gmail.com';
protect_email(str);
function protect_email(str){
    let str1=str.split('.');
    let str2=str1[1].split('@');
    console.log(`${str1[0]} ... @${str2[1]}.${str1[2]}`);
}