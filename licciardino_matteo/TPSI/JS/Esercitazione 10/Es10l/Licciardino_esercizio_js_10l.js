let frase = "cane"
let frase2 = "gatto"

function concat_Switch_first_Two_words(frase, frase2) {
    let newString = frase2.substring(0, 2) + frase.substring(2)
    let newString2 = frase.substring(0, 2) + frase2.substring(2)

    return newString + " " + newString2
}

console.log(concat_Switch_first_Two_words(frase, frase2))