/* 
Užduotis 1
Naudodami while loop, konsolėje parašykite nuo 10 iki 1. 
*/
let skaicius = 10;
while (skaicius > 0) {
    console.log(skaicius);
    skaicius--;
};


/* 
Užduotis 2
Naudodami for loop, konsolėje parašykite nuo 10 iki 1.
*/
for (let index = 10; index >= 1; index--) {
    console.log(index);   
};


/*
Užduotis 3
Per mėnesį avių skaičius išauga 4 kartais. Naudodami while loop ir tris nurodytus kintamuosius, išveskite avių skaičių 12 mėnesių.

let numAvys = 4;
let numMenuo = 1;
let kiekMenSpausdinti = 12;

Štai kaip atrodys pirmos dvi eilutės:

Po 1 mėnesio(-ių) bus 16 avių!
Po 2 mėnesio(-ių) bus 64 avių!
*/
let numAvys = 4;
let numMenuo = 1;
let kiekMenSpausdinti = 12;
while (numMenuo <= kiekMenSpausdinti) {
    numAvys *= 4;
    console.log(`po ${numMenuo} menesio(-iu) bus ${numAvys} aviu!`);
    numMenuo++;
};


/*
Užduotis 4
Atlikite užduotį JS 03 su for loop
*/
numAvys = 4;
numMenuo = 1;
kiekMenSpausdinti = 12;
for (let index = numMenuo; index <= kiekMenSpausdinti; index++){
    numAvys *= 4;
    console.log(`po ${numMenuo} menesio(-iu) bus ${numAvys} aviu!`);
    numMenuo++;
};


/*
Užduotis 5
Hidroeleketrinėje yra 19 generatorių. Pirmi 4 gamina po 62 MW, likusieji 15 - po 124 MW. Inžinieriai paprašė tavęs sukurti du ciklus (loops), kurie vienas po kito įjungia visus 19 generatorių ir atspausdina generuojamų MW skaičių. Pirmiems 4 generatoriams panaudok while loop, likusiems 15 - for loop. Kiekviena spausdinama eilutė turėtų atrodyti taip (koreguojant currentGen ir totalMW):

Generatorius #1 įjungtas, pridėjo 62 MW, viso generuojama 62 MW!
Generatorius #2 įjungtas, pridėjo 62 MW, viso generuojama 124 MW!

Naudokis tokiais kintamaisiais:
let currentGen = 1;
let totalGen = 19;
let totalMW = 0;
*/
let currentGen = 1;
let totalGen = 19;
let totalMW = 0;
while (currentGen < 5) {
    
    totalMW +=62;
    console.log(`Generatorius #${currentGen} įjungtas, pridėjo 62 MW, viso generuojama ${totalMW} MW!`);
    currentGen++;
    totalGen--;
};

for (let index = totalGen; index > 0; index--) {
    totalMW += 124;
    console.log(`Generatorius #${currentGen} įjungtas, pridėjo 124 MW, viso generuojama ${totalMW} MW!`);
    currentGen++;
};

/*
Užduotis 6
Keli pakeitimai JS 05 užduočiai. Veikia tik lyginiai generatoriai. Panaudok tik vieną for loop. Nepamiršk, kad pirmi 4 generatoriai gamina po 62 MW, o likusieji 15 - po 124 MW.

Konsolės formatas:

Generatorius #1 išjungtas.
Generatorius #2 įjungtas, pridėjo 62 MW, viso generuojama 62 MW!

Naudojami kintamieji:
let totalGen = 19;
let totalMW = 0;
*/

totalGen = 19;
totalMW = 0;

for (let index = 1; index <= 19; index++) {
    if (index <= 4 && totalGen % 2 === 0) {
        totalGen--;
        totalMW += 64;
        console.log(`Generatorius #${index} įjungtas, pridėjo 64 MW, viso generuojama ${totalMW} MW!`);
    }
    else if (index > 4 && totalGen % 2 === 0) {
        totalGen--;
        totalMW += 124;
        console.log(`Generatorius #${index} įjungtas, pridėjo 124 MW, viso generuojama ${totalMW} MW!`);
    } else if (totalGen % 2 !== 0) {
        totalGen--;
        console.log(`Generatorius #${index} išjungtas.`);
    }
};

/*
Užduotis 7
Papildyk while loop taip, kad tik lyginiai skaičiai būtų spausdinami. Tavo rezultatas turėtų būti lyginiai skaičiai nuo 10 iki 2 žemėjančia tvarka.

let num=10;
while (num > 0) {

console.log(num);

num--;
}
*/
let num=10;
while (num > 0) {
    if (num % 2 === 0) {
        console.log(num);   
    };
    num--;
};


/*
Užduotis 8
Sukurk funkciją maxOf2, kuri priima du skaičius ir gražina didesnį skaičių. Nepamiršk galimybės, kad skaičiai bus lygūs. Tuo atveju gražink vieną iš skaičių.
*/

function maxOf2(number1, number2) {
    if (number1 > number2) {
        return "pirmas skaicius didesnis: " + number1;
    } else if (number2 > number1) {
        return "antras skaicius didesnis: " + number2;
    } else if (number1 === number2) {
        return "skaiciai lygus: " + number1;
    } else {
        return "klaida";
    }
};

console.log(maxOf2(2, 3));
