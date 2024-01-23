// Classe Animale

  
  // Classe Automobile
  const Automobile = {
    marca: "Toyota",
    modello: "Corolla",
    colore: "Blu",
    accendi: function() {
      console.log("L'automobile è accesa.");
    },
    guida: function() {
      console.log("L'automobile sta procedendo lungo la strada.");
    },
    enumera: function() {
      for (let attributo in this) {
        if (typeof this[attributo] !== 'function') {
          console.log(attributo);
        }
      }
    }
  };
  
  // Classe Poligono
        
  
  // Istanziare due oggetti per ciascuna classe
 
  
  const automobile1 = Object.create(Automobile);
  const automobile2 = Object.create(Automobile);
  
  
  // Richiamare il metodo enumera() per ogni oggetto  
  console.log("Attributi dell'Automobile 1:");
  automobile1.enumera();
    
  console.log("Attributi dell'Automobile 2:");
  automobile2.enumera();
  
  