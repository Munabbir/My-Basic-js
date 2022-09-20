function publicBusFare(person){ 
    let busCapasity = 50;
    let busAfterRemenig = person % busCapasity;
    let microCapasity = 11;
    let microAfterRemening = busAfterRemenig % microCapasity;

    let tiketPrice = 250;
    let totlacost = microAfterRemening * tiketPrice;

    return totlacost;
}

console.log(publicBusFare(50));
console.log(publicBusFare(55));
console.log(publicBusFare(112));
console.log(publicBusFare(235));
console.log(publicBusFare(365));
