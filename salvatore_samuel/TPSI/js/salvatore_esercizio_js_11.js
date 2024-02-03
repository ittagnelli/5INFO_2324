function copy(num) {
    let newOrder = [];
    num.forEach((value) => {
        newOrder.unshift(value);
    });
    return newOrder;
}

let numeri = [1, 2, 3];
console.log(copy(numeri));