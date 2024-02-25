

let Automobile = function(persone, velocita, rapp_v, on_off) {
    (this.persone = persone),
    (this.velocita = velocita),
    (this.rapp_v = rapp_v),
    (this.on_off = on_off),
    (this.imp_persona = function () {
        this.persone = 4
        if (this.velocita == 0)
        {
            console.log(">> Valore modificato - Veicolo con: ", this.persone, " persone, di velocità: ", this.velocita, " con marcia: ", this.rapp_v, " in modalità: ", this.on_off)

        }
        else
        {
            console.log("L'auto non è ferma impossibile modificare il numero delle persone!")
        }
    }),
    (this.imp_velocita = function () {
        let contr = this.velocita
        this.velocita = 41
        if (this.velocita >= 0 && this.velocita <= 180 && this.on_off == true && this.velocita <= contr + 30)
        {
            console.log(">> Valore modificato - Veicolo con: ", this.persone, " persone, di velocità: ", this.velocita, " con marcia: ", this.rapp_v, " in modalità: ", this.on_off)
        }
        else
        {
            console.log("Il valore è fuori dall'intervallo 0 - 180 o la velocità inserita supera di 30 km/h quella attuale!")
        }

    }),
    (this.aumenta = function () {
        this.rapp_v+=1
        if (this.rapp_v <= 6 && this.on_off == true)
        {
            console.log(">> Valore modificato - Veicolo con: ", this.persone, " persone, di velocità: ", this.velocita, " con marcia: ", this.rapp_v, " in modalità: ", this.on_off)
        }
        else
        {
            console.log("Impossibile aumetare rapporto velocità massimo raggiunto o veicolo spento!")
        }
    }),
    (this.diminuisce = function () {
        this.rapp_v-=1
        if (this.rapp_v >= 1 && this.on_off == true)
        {
            console.log(">> Valore modificato - Veicolo con: ", this.persone, " persone, di velocità: ", this.velocita, " con marcia: ", this.rapp_v, " in modalità: ", this.on_off)
        }
        else
        {
            console.log("Impossibile diminuire rapporto velocità minimo raggiunto o veicolo spento!")
        }
    })
    
};


console.log("OPERAZIONI:")
console.log("--> 1. Impostare numero di persone a bordo")
console.log("--> 2. Impostare la velocità")
console.log("--> 3. Aumentare rapporto di velocità")
console.log("--> 4. Diminuire rapporto di velocità\n")

let persone = 1
let veloc = 10
let r_veloc = 2
let mod = true

let Automobile1 = new Automobile(persone, veloc, r_veloc, mod)
console.log(">> Valore attuale - Veicolo con: ", persone, " persone, di velocità: ", veloc, " con marcia: ", r_veloc, " in modalità: ", mod, "\n")


let ope = 4

if (ope == 1)
{
    Automobile1.imp_persona()
}
else if (ope == 2)
{
    Automobile1.imp_velocita()
}
else if (ope == 3)
{
    Automobile1.aumenta()
}
else if (ope == 4)
{
    Automobile1.diminuisce()
}


