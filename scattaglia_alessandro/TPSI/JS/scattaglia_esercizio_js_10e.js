function capitalize_all(str) {
    const parole = str.split(' ');
  
    for (let i = 0; i < parole.length; i++) {
      parole[i] = parole[i].charAt(0).toUpperCase() + parole[i].slice(1);
    }
  
    return parole.join(' ');
  }
  
  const input = "ciamo mondo la terra gira!!!";
  const output = capitalize_all(input);
  
  console.log(output);
  