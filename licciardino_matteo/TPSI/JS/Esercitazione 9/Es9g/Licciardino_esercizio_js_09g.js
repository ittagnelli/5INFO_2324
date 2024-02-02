const foundoHorasMin = (orario, orario2, orario3) => {
    let temp = ((orario.ora * 3600) + (orario.minuti * 60) + orario.s);
    let temp2 = ((orario2.ora * 3600) + (orario2.minuti * 60) + orario2.s);
    let temp3 = ((orario3.ora * 3600) + (orario3.minuti * 60) + orario3.s);

    if((temp <= temp2) && (temp <= temp3)){
        return orario
    } else if ((temp2 <= temp) && (temp2 <= temp3)) {
        return orario2
    } else {
        return orario3
    }
}

const main = () => {
    let orario = {ora: 11, minuti: 40, s: 55};
    let orario2 = {ora: 9, minuti: 30, s: 40};
    let orario3 = {ora: 13, minuti: 50, s: 30};
    console.log("Primo test con l'orario minore è: ", foundoHorasMin(orario, orario2, orario3), "\n");

    let orario4 = {ora: 10, minuti: 30, s: 5};
    let orario5 = {ora: 12, minuti: 5, s: 40};
    let orario6 = {ora: 11, minuti: 50, s: 20};
    console.log("Secondo test con l'orario minore è: ", foundoHorasMin(orario4, orario5, orario6));
}

main()