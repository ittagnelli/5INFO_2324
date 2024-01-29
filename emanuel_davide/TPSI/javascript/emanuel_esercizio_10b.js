let email="davide.emanuel@isitutoagnelli.it";

const CatchEmail=(email)=>{
    let index=email.indexOf("@");
    let cognome=email.substring(0,index);
    let dominio=email.substring(index);

    let cacheCognome=cognome.substr(0,6)+ '...';
    let cacheEmail=cacheCognome + dominio;
    console.log(cacheEmail);
}
CatchEmail(email);