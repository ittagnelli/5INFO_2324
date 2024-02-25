function invert_case(str) {
    let invertita = '';
    for (let i = 0; i < str.length; i++) {
      const char = str[i];
      if (char == char.toUpperCase()) {
        invertita += char.toLowerCase();
      } else {
        invertita += char.toUpperCase();
      }
    }
    return invertita;
  }
  const stringa = "Ciao Mondo";
  const stringaInvertita = invert_case(stringa);
  console.log(stringaInvertita); 
  