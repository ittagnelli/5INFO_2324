class Orario {
    constructor(h, m, s) {
      this.h = h;
      this.m = m;
      this.s = s;
    }
  
    is_MinH(horas) {
      if (  this.h < horas.h || 
            (this.h == horas.h && this.m < horas.m) || 
            (this.h == horas.h && this.m == horas.m && this.s < horas.s)
        ) 
      {
        return this;
      } else {
        return horas;
      }
    }
} 

const main = () => {
    let orario = new Orario(10, 30, 15);
    let orario_2 = new Orario(12, 45, 30);

    let horasMin = orario.is_MinH(orario_2)

    console.log("L'orario minore è:", horasMin.h, ":", horasMin.m, ":", horasMin.s);
}

main();