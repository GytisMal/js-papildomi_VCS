/* 01.
Sukurkite masyvą su dešimt augalų pavadinimų.
*/

let augalai = ["pomidoras", "gele", "cukinija", "agurkas", "petrazole", "augalas1", "augalas2", "augalas3", "augalas4", "augalas5"];

/* 02.
Atspausdinkite kiekvieną pirmo uždavinio augalą atskiroje eilutėje.
*/

for (let index = 0; index < augalai.length; index++) {
    console.log(`${augalai[index]}\n`);
}

/* 03.
Atspausdinkite pirmo uždavinio kiekvieną augalą pradedant nuo paskutinio, ir baigiant pirmuoju. (atvirkščias ciklas).
*/

for (let index = augalai.length -1; index >= 0; index--) {
    console.log(`${augalai[index]}\n`);
}

/* 04.
Suskaičiuokite kiek pirmo uždavinio masyve yra žodžių trumpesnių nei 5 simboliai, ir kiek ilgesnių nei 7 simboliai.
*/
let trumpesniNei5 = 0;
let ilgesniNei7 = 0;
for (let index = 0; index < augalai.length; index++) {
    const zodis = augalai[index];

    if (zodis.length < 5) {
        trumpesniNei5++;
    } else if (zodis.length > 8) {
        ilgesniNei7++;
    }
}
console.log(trumpesniNei5);
console.log(ilgesniNei7);