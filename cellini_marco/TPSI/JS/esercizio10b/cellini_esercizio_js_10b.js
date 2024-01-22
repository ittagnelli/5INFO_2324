const protect_email = (email) => {
    let splitted = email.split('@');
    return `${splitted[0].replaceAll(splitted[0], '*'.repeat(splitted[0].lenght))}`;
};

console.log(protect_email('marco.cellini@istitutoagnelli.it'));