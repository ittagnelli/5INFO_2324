//GIUSTO



let num = [1, 5, 8, 10, 19, 20]
let n = 5


function multipli(num) {
    let num2 = []
    for (let l of num) {
        
        l%n == 0 ? num2.push(0) : num2.push(l)
    }
    return num2
}


console.log(multipli(num))