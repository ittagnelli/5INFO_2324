class Orario {
    constructor(H, m, s) {
      this.H = H;
      this.m = m;
      this.s = s;
    }
  
    diffTime(orario) {
      let orarioInMS = (this.H * 3600 + this.m * 60 + this.s) * 1000;
      let orarioParamsInMS = (orario.H * 3600 + orario.m * 60 + orario.s) * 1000;
  
      let diffInMS = Math.abs(orarioInMS - orarioParamsInMS);
      let diffInS = diffInMS / 1000;
      let diffInM = diffInS / 60;
      let diffInH = diffInM / 60;
  
      return {
        diffInMS,
        diffInS,
        diffInM,
        diffInH
      };
    }
}

const main = () => {
    let orario = new Orario(10, 30, 15);
    let orario_2 = new Orario(2, 45, 30);

    let diff = orario.diffTime(orario_2);

  console.log("Differenza in millisecondi:", diff.diffInMS);
  console.log("Differenza in secondi:", diff.diffInS);
  console.log("Differenza in minuti:", diff.diffInM);
  console.log("Differenza in ore:", diff.diffInH);
}

main();