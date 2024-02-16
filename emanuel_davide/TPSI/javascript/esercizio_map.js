function reverseArray(array) {
    return array.map((element, index, arr) => arr[arr.length - 1 - index]);
  }
  
  // Esempio di utilizzo:
  const arrayIniziale = [1, 2, 3, 4, 5];
  const arrayInvertito = reverseArray(arrayIniziale);
  console.log(arrayInvertito); // Output: [5, 4, 3, 2, 1]
  