const abbr = (full_name) => {
    return `${full_name.split(' ')[0][0].toUpperCase()}${full_name.split(' ')[0].slice(1)} ${full_name.split(' ')[1][0].toUpperCase()}.`;
}

console.log(abbr('Ciro esposito'));