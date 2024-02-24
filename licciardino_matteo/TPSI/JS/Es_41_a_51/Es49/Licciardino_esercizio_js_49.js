class Fibonacci {
    constructor() {}
  
    calcNumber(num) {
      if (num <= 0) return 0;
      if (num == 1) return 1;
  
      let numLast = 0;
      let numNow = 1;
  
      for (let i = 2; i <= num; i++) {
        let numNew = numNow;
        numNow += numLast;
        numLast = numNew;
      }
  
      return numNow;
    }
}

const main = () => {
    let fibonacci = new Fibonacci();

    for (let i = 0; i <= 5; i++) {
        let num = Math.floor(Math.random() * 24);
        let ris = fibonacci.calcNumber(num);
        console.log(`Il ${i}-esimo numero di Fibonacci è: ${ris}`);;
    }
}

main();