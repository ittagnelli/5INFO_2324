let protect_email = function (email)
{
    i1=email.indexOf(".");
    i2=email.indexOf("@");
    crypto=email.slice(i1, i2);
    email= email.replace(email.slice(i1, i2), " ... ");

    

    return email;

    

}

console.log(protect_email('alberto.amort@istitutoagnelli.it'))