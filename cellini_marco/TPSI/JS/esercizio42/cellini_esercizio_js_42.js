class calcolatrice {
    constructor() { this.ans = 0; }
    sum(n) { this.ans += n; return this; }
    diff(n) { this.ans -= n; return this; }
    mul(n) { this.ans *= n; return this; }
    div(n) { this.ans /= n; return this; }
    get get_ans() { return this.ans; }
}

let cal = new calcolatrice(0);
console.log(`${cal.sum(5).sum(3).diff(2).sum(4).mul(5).diff(2).div(2).get_ans}`);
cal = new calcolatrice();
console.log(`${cal.sum(6).diff(2).mul(5).sum(8).div(4).get_ans}`);
cal = new calcolatrice();
console.log(`${cal.sum(11).mul(3).sum(5).diff(5).div(11).get_ans}`);
cal = new calcolatrice();
console.log(`${cal.sum(29).sum(2).diff(7).div(3).div(2).sum(1).mul(2).get_ans}`);