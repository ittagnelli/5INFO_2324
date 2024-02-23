//GIUSTO


let num = [1, 4, 7, 3, 11, 12, 20]

let nn = 7

function primi(n) {
    let n_primi = []
    let n_nat = []
    let c = 0
    for (let l of n) {
        for (let i = l - 1; i > 1; i--) {
            
            if (l % i == 0)
            {
                c = 1
                
            }
            
            
       
        }
        if (c == 1 || l == 1)
        {
            n_nat.push(l)
        }
        else
        {
            n_primi.push(l)
        }
        c = 0
    }



    return (n_primi + "," + n_nat)

}




console.log(primi(num))