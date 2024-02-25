//GIUSTO


class Calcolatrice {
    constructor(num)
    {
        this.num = num
    }
    
    
    add(n) { this.num += n; return this}
    mol(n) { this.num *= n;return this}
    sott(n) { this.num -= n; return this}
    div(n) { this.num /= n; return this}

}

ope1 = new Calcolatrice(5)
console.log(ope1.add(3).sott(2).add(4).mol(5).sott(2).div(2));

ope2 = new Calcolatrice(6)
console.log(ope2.sott(2).mol(5).add(8).div(4));

ope3 = new Calcolatrice(11)
console.log(ope3.mol(3).add(5).sott(5).div(11));

ope4 = new Calcolatrice(29)
console.log(ope4.add(2).sott(7).div(3).div(2).add(1).mol(2))
