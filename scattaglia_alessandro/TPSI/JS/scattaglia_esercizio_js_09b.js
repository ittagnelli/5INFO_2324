let Macchina = function (targa, tipo, colore, porte, anno_fabbricazione) {
    (this.targa = targa),
    (this.tipo = tipo),
    (this.colore = colore),
    (this.porte = porte),
    (this.anno_fabbricazione = anno_fabbricazione),

    (this.speak = function () {
        console.log(`\ninformazioni macchina: \n${this.targa},${this.tipo},${this.colore},${this.porte},${this.anno_fabbricazione} `);

    });
    
    
    
  };

  let macchina1 = new Macchina("DV945BV", "Fiat", "Azzurra", "5", "2002");
    macchina1.speak();

    let macchina2 = new Macchina("AA123BB", "Punto", "Nera", "5", "1980");
    macchina2.speak();

    let macchina3 = new Macchina("CA162AC", "Fiat", "Rossa", "3", "1999");
    macchina3.speak();

    let macchina4 = new Macchina("BV134CF", "BMW", "Gialla", "5", "2004");
    macchina4.speak();

    let macchina5 = new Macchina("FD970VH", "Audi", "Bianca", "5", "2000");
    macchina5.speak();