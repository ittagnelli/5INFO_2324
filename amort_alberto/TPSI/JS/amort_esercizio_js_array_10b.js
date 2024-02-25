let protect_email=function(mail)
{
    let i1=mail.indexOf(".");
    let i2=mail.indexOf("@");
    let email1= mail.slice(i1);
    let email2=email1.slice(i2);
    mail=(mail.concat('...')).concat(email2);
    console.log(mail.join(''))


}


let mail=['a', 'l', 'b', 'e', 'r', 't', 'o', '.', 'a', 'm', 'o', 'r', 't', '@', 'g', 'm', 'a', 'i', 'l', '.', 'i', 't'];
protect_email(mail);