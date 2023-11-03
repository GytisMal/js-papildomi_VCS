/* LENGVESNI */

/* 01.
Sukurkite ciklą kuris atspausdintų 10 kartų žodį “labas”.
*/

for (let index = 1; index <= 10; index++) {
    console.log("labas");  
}

/* 02.
Sukurkite ciklą kuris atspausdintų skaičius nuo 0 iki 9.
*/
for (let index = 0; index < 10; index++) {
    console.log(index);  
}




/* 03.
Atspausdinkite kas antrą skaičių nuo 10 iki 50 (porinius);
*/

for (let index = 10; index <= 50; index+=2) {
    console.log(index);  
}

/* 04.
Atspausdinkite kas antrą skaičių nuo 10 iki 50. (porinius) Jei skaičius dalinasi iš 10 be liekanos jo nespausdinkite. ( naudokite continue.) (atspausdinti visus porinius skaičius, išskyrus tuos kurie dalinasi iš 10 be liekanos)
*/
for (let index = 10; index <= 50; index+=2) {
    if (index % 10 !== 0) {
        console.log(index);  
    }
}

/* 05.
Sukurkite ciklą kuris suktųsi nuo 0 iki 20. Suskaičiuokite, kiek kartų kintamasis i turėjo porinę reikšmę;
*/
let sum = 0;
for (let index = 0; index <= 20; index++) {
    if (index % 2 === 0) {
        sum++;
    }
}
console.log(sum);

/* SUNKESNI */

/* 01.
Sugeneruokite 300 atsitiktinių skaičių nuo 0 iki 300, atspausdinkite juos atskirtus tarpais ir suskaičiuokite kiek tarp jų yra didesnių už 150.  Skaičiai didesni nei 275 turi būti atspausdinti skliausteliuose” [ ] “.
*/
let numbers = "";
let countAbove150 = 0;
for (let index = 0; index < 300; index++) {
    let number = Math.floor(Math.random() * 301);
    numbers += number + " ";
    if (number > 150) {
        countAbove150++;
    } 
    if (number > 275) {
        numbers = numbers.slice(0, -4); 
        numbers += `[${number}] `;
    }
}
console.log(numbers);
console.log(countAbove150);

/* 02.
Vienoje eilutėje atspausdinkite visus skaičius nuo 1 iki 3000, kurie dalijasi iš 77 be liekanos. Skaičius atskirkite kableliais. Po paskutinio skaičiaus kablelio neturi būti.
*/
numbers = "";
for (let index = 1; index < 3000; index++) {
    if (index % 77 === 0 && index != 2926) {
        numbers += index + ", ";
    } else if (index % 77 === 0 && index == 2926) {
        numbers += index +"";
    };
};

console.log(numbers);
/* 03.
Nupieškite kvadratą iš “*”, kurio kraštines sudaro 10 “*”.
* * * * * * * * * * *
* * * * * * * * * * *
* * * * * * * * * * *
* * * * * * * * * * *
* * * * * * * * * * *
* * * * * * * * * * *
* * * * * * * * * * *
*/

for (let index = 0; index < 10; index++) {
    let row = "";
    for (let j = 0; j < 10; j++) {
       row += "* ";  
    };
    console.log(row);
};