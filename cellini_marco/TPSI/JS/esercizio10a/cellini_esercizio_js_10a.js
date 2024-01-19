const abbr = (full_name) => {
    return full_name.split(' ')[0] + ' ' + full_name.split(' ')[1][0] + '.';
}

console.log(abbr("Ciro Esposito"));