"use strict";

function selectButton() 
{
    let zahl = prompt("Wählen Sie eine Zahl aus:");
    let num = parseInt(zahl);
    
    if (num <= 1) {
        console.log(num + " ist keine Primzahl.");
        return;
    }
    if (num <= 3) {
        console.log(num + " ist eine Primzahl.");
        return;
    }
    if (num % 2 === 0 || num % 3 === 0) {
        console.log(num + " ist keine Primzahl.");
        return;
    }

    for (let i = 5; i * i <= num; i += 6) {
        if (num % i === 0 || num % (i + 2) === 0) {
            console.log(num + " ist keine Primzahl.");
            return;
        }
    }
    console.log(num + " ist eine Primzahl.");
}