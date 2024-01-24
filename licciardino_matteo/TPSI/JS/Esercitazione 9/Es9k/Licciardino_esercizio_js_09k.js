class Automobile {
  constructor() {
    this.peopleOnCar = 0;
    this.velocità = 0;
    this.marcia = 1;
    this.isOn = false;
  }

  peopleOnCarSet(numPeople) {
    if (!this.isOn) {
      this.peopleOnCar = Math.min(Math.max(0, numPeople), 5);
      this.printState();
    } else {
      console.log("Impossibile cambiare il numero di persone a bordo con l'auto in movimento.");
    }
  }

  Velocità(newVelocità) {
    if (this.isOn) {
      const velocitàMax = 180;
      const variazioneMax = 30;

      newVelocità = Math.max(0, Math.min(newVelocità, velocitàMax));

      if (Math.abs(newVelocità - this.velocità) <= variazioneMax) {
        this.velocità = newVelocità;
        this.printState();
      } else {
        console.log("La variazione di velocità non è consentita.");
      }
    } else {
      console.log("L'auto è spenta. Accendere l'auto prima di impostare la velocità.");
    }
  }

  marciaIncrease() {
    if (this.isOn && this.marcia < 6) {
      this.marcia++;
      this.printState();
    } else {
      console.log("Impossibile aumentare il rapporto di velocità.");
    }
  }

  DecreaseMarcia() {
    if (this.isOn && this.marcia > 1) {
      this.marcia--;
      this.printState();
    } else {
      console.log("Impossibile diminuire il rapporto di velocità.");
    }
  }

  turnOnOff() {
    this.isOn = !this.isOn;
    this.printState();
  }

  printState() {
    console.log(`
      Persone a bordo: ${this.peopleOnCar}
      Velocità: ${this.velocità} km/h
      Rapporto di velocità: ${this.marcia}
      Stato: ${this.isOn ? 'Accesa' : 'Spenta'}
    `);
  }
}

const main = () => {
  const auto = new Automobile();

  auto.peopleOnCarSet(4);
  auto.turnOnOff();
  auto.Velocità(130);
  auto.marciaIncrease();
  auto.DecreaseMarcia();
  auto.turnOnOff();
  auto.Velocità(200);
};

main();