"use strict"

// Random skaiciu funkcija\\
function randomFunctionWithMax (min, max) {
    return Math.floor((Math.random() *  (max - min+1)) + min)  // minimali reiksme ieina, maksimali ne
}

let laiptines = [];



let butuSkaicius1 = []
for (let i = 1; i < randomFunctionWithMax(10, 30); i++) {
    butuSkaicius1.push(randomFunctionWithMax(1,100))
}    laiptines.push(butuSkaicius1)
let butuSkaicius2 = []
for (let i = 1; i < randomFunctionWithMax(10, 30); i++) {
    butuSkaicius2.push(randomFunctionWithMax(1,100))
}    laiptines.push(butuSkaicius2)
let butuSkaicius3 = []
for (let i = 1; i < randomFunctionWithMax(10, 30); i++) {
    butuSkaicius3.push(randomFunctionWithMax(1,100))
}    laiptines.push(butuSkaicius3)
let butuSkaicius4 = []
for (let i = 1; i < randomFunctionWithMax(10, 30); i++) {
    butuSkaicius4.push(randomFunctionWithMax(1,100))
}    laiptines.push(butuSkaicius4)
let butuSkaicius5 = []
for (let i = 1; i < randomFunctionWithMax(10, 30); i++) {
    butuSkaicius5.push(randomFunctionWithMax(1,100))
}    laiptines.push(butuSkaicius5)

console.log(laiptines);


for ( let i=0; i < butuSkaicius1.length; i++) {
    let divElementas = document.createElement("div");
divElementas.classList.add("hueta");
divElementas.innerText = butuSkaicius1[i]
document.querySelector(".laiptine1").append(divElementas);
}
for ( let i=0; i < butuSkaicius2.length; i++) {
    let divElementas = document.createElement("div");
divElementas.classList.add("hueta");
divElementas.innerText = butuSkaicius2[i]
document.querySelector(".laiptine2").append(divElementas);
}
for ( let i=0; i < butuSkaicius3.length; i++) {
    let divElementas = document.createElement("div");
divElementas.classList.add("hueta");
divElementas.innerText = butuSkaicius3[i]
document.querySelector(".laiptine3").append(divElementas);
}
for ( let i=0; i < butuSkaicius4.length; i++) {
    let divElementas = document.createElement("div");
divElementas.classList.add("hueta");
divElementas.innerText = butuSkaicius4[i]
document.querySelector(".laiptine4").append(divElementas);
}
for ( let i=0; i < butuSkaicius5.length; i++) {
    let divElementas = document.createElement("div");
divElementas.classList.add("hueta");
divElementas.innerText = butuSkaicius5[i]
document.querySelector(".laiptine5").append(divElementas);
}
