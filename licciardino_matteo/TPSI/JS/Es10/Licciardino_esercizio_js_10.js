let str = "Matteo Licciardino";

const abbr = (str) => {
    let punto = "."

    console.log(str.substring(0, 8).split(" ").concat(punto));
}

abbr(str)