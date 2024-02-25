function boh() {
    let arr = Array(7).fill(0).map((item) => item = Math.floor(Math.random() * (48 - 122) + 122));
    console.log(arr.map((item) => item = String.fromCharCode(item)));
}

boh();