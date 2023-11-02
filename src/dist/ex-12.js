"use strict";
// DIN UPPGIFT: Implementera en typeguard så att funktionen kan returnera priset oberoende om parametern är ett number eller som ett property i ett objekt. / 2 poäng
function getPrice(price) {
    if (price == 100) {
        return price;
    }
    else {
        let valuesArray = Object.values(price);
    }
}
// Testa funktionen
console.log(getPrice(100)); // Ska skriva ut 100
console.log(getPrice({ price: 100 })); // Ska skriva ut 100
