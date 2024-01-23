const protect_email = (email) => {
    let splitted = email.split('@');
    return `${splitted[0].replaceAll(splitted[0], '*'.repeat(splitted[0].length))}@${splitted[1]}`;
};

let mail = 'marco.cellini@istitutoagnelli.it';
console.log(mail);
console.log(protect_email(mail));