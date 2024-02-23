function concat(str1, str2) {
    return `${str2[0]}${str1.slice(1)}${str1[0]}${str2.slice(1)}`;
}

console.log(concat("Piao Mondo la terra gira!!!", "Ciao Mondo la terra gira!!!"));
