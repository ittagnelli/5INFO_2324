let str = "Matteo Licciardino";

const abbr = (str) => {
    let parole = str.split(" ");
    let initUsername = parole[1].charAt(0).toUpperCase();
    let nameAbbr = parole[0] + " " + initUsername + ".";

    console.log(nameAbbr);
}

abbr(str);