/*
Uždavinių sprendimui nenaudoti, masyvų, ciklų ir savo parašytų funkcijų. JavaScript funkcijas žinoma naudokite (pageidautina).
Visi random generuojami skaičiai turi būti sveikieji.
*/

/* 01.
Sukurkite 4 kintamuosius, kurie saugotų jūsų vardą, pavardę, gimimo metus ir šiuos metus (nebūtinai tikrus). Parašykite kodą, kuris pagal gimimo metus paskaičiuotų jūsų amžių ir naudodamas vardo ir pavardės kintamuosius atspausdintų tokį sakinį :
"Aš esu Vardenis Pavardenis. Man yra XX metai(-ų)".
*/

let name = "Gytis";
let surname = "Malinauskas";
let bornDate = 2000;
let nowDate = new Date().getFullYear();
console.log(`As esu ${name} ${surname}. Man yra ${nowDate - bornDate} metai.`);

/* 02.
Naudokite funkciją Math.random(). Sukurkite du kintamuosius ir naudodamiesi funkcija Math.random() jiems priskirkite atsitiktines reikšmes nuo 0 iki 4. Didesnę reikšmę padalinkite iš mažesnės. Atspausdinkite rezultatą jį suapvalinę iki 2 skaičių po kablelio.
*/

let num1 = Math.floor(Math.random() * 5);
let num2 = Math.floor(Math.random() * 5);
let result = 0;
console.log(num1, num2);
if (num1 > num2 && num2 !==0) {
    result = num1 / num2;
    console.log(result.toFixed(2));
} 
else if (num2 > num1 && num1 !==0) {
    result = num2 / num1;
    console.log(result.toFixed(2));
} else if (num1===num2) {
    console.log("lygu");
} else {
    console.log("dalyba is nulio negalima");
}

/* 03.
Naudokite funkciją Math.random(). Sukurkite tris kintamuosius ir naudodamiesi funkcija Math.random() jiems priskirkite atsitiktines reikšmes nuo 0 iki 25. Raskite ir atspausdinkite kintąmąjį turintį vidurinę reikšmę.
*/

let x = Math.floor(Math.random() * 26);
let y = Math.floor(Math.random() * 26);
let z = Math.floor(Math.random() * 26);
console.log(`x: ${x}, y: ${y}, z: ${z}`);

let middValue = x + y + z - Math.min(x, y, z) - Math.max(x, y, z);
console.log(middValue);

/* 04.
Įvedami skaičiai - kr1, kr2, kr3 – kraštinių ilgiai, trys kintamieji (naudokite ​Math.random()​ funkcija nuo 1 iki 10). Parašykite JavaScript programą, kuri nustatytų, ar galima sudaryti trikampį ir atsakymą atspausdintų. 
*/
let kr1 = Math.floor(Math.random() * 10) + 1;
let kr2 = Math.floor(Math.random() * 10) + 1;
let kr3 = Math.floor(Math.random() * 10) + 1;
console.log(`kr1: ${kr1}, kr2: ${kr2}, kr3: ${kr3}`);

if (kr1 < kr2 + kr3 && kr2 < kr1 + kr3 && kr3 < kr1 + kr3) {
    console.log("trikampis");
} else {
    console.log("ne trikampis");
}

/* 05.
Sukurkite keturis kintamuosius ir ​Math.random()​ funkcija sugeneruokite jiems reikšmes nuo 0 iki 2. Suskaičiuokite kiek yra nulių, vienetų ir dvejetų.
*/

let a = Math.floor(Math.random() * 3); 
let b = Math.floor(Math.random() * 3);
let c = Math.floor(Math.random() * 3);
let d = Math.floor(Math.random() * 3);

console.log(`pirmas skaicius: ${a}, antras skaicius: ${b}, trecias skaicius: ${c}, ketvirtas skaicius: ${d}`);

let nuliai = 0;
let vienetai = 0;
let dvejetai = 0;

if (a === 0) {
    nuliai++;
} else if (a === 1) {
    vienetai++;
} else if (a === 2) {
    dvejetai++;
}

if (b === 0) {
    nuliai++;
} else if (b === 1) {
    vienetai++;
} else if (b === 2) {
    dvejetai++;
}

if (c === 0) {
    nuliai++;
} else if (c === 1) {
    vienetai++;
} else if (c === 2) {
    dvejetai++;
}

if (d === 0) {
    nuliai++;
} else if (d === 1) {
    vienetai++;
} else if (d === 2) {
    dvejetai++;
}

console.log("Nuliai:", nuliai);
console.log("Vienetai:", vienetai);
console.log("Dvejetai:", dvejetai);

/* 06.
Naudokite funkcija Math.random(). Atspausdinkite 3 skaičius nuo -10 iki 10. Skaičiai mažesni už 0 turi būti  laužtiniuose skliaustuose [], 0 -  (), didesni už 0 {}.
*/
let sk1 = Math.floor(Math.random() * 21) - 10;
let sk2 = Math.floor(Math.random() * 21) - 10;
let sk3 = Math.floor(Math.random() * 21) - 10;

console.log(`pirmas skaicius: ${sk1}, antras skaicius: ${sk2}, trecias skaicius: ${sk3}`);
if (sk1 > 0) {
    console.log(`{${sk1}}`);
};
if (sk2 > 0) {
    console.log(`{${sk2}}`);
};
if (sk3 > 0) {
    console.log(`{${sk3}}`);
};
if (sk1 == 0) {
    console.log(`(${sk1})`);
};
if (sk2 == 0) {
    console.log(`(${sk2})`);
};
if (sk3 == 0) {
    console.log(`(${sk3})`);
};
if (sk1 < 0) {
    console.log(`[${sk1}]`);
};
if (sk2 < 0) {
    console.log(`[${sk2}]`);
};
if (sk3 < 0) {
    console.log(`[${sk3}]`);
};


/* 07.
Įmonė parduoda žvakes po 1 EUR. Perkant daugiau kaip už 1000 EUR taikoma 3 % nuolaida, daugiau kaip už 2000 EUR - 4 % nuolaida. Parašykite programą, kuri skaičiuos žvakių kainą ir atspausdintų atsakymą kiek žvakių ir kokia kaina perkama. Žvakių kiekį generuokite ​Math.random()​ funkcija nuo 5 iki 3000.
*/
let zvakes = Math.floor(Math.random() * 2996) + 5;
let zvakesKaina = 1;
let pradinisKainosDydis = zvakes * zvakesKaina;
let nuolaida = 0;
let nuolaidaProcentais = 0;
let galutineKaina = 0;

if (pradinisKainosDydis > 2000) {
    nuolaidaProcentais = 4;
    nuolaida = (nuolaidaProcentais / 100) * pradinisKainosDydis;
    galutineKaina = pradinisKainosDydis - nuolaida;
    console.log(`perkama zvakiu: ${zvakes}, ju kaina ${galutineKaina}.`);
} else if (pradinisKainosDydis > 1000) {
    nuolaidaProcentais = 3;
    nuolaida = (nuolaidaProcentais / 100) * pradinisKainosDydis;
    galutineKaina = pradinisKainosDydis - nuolaida;
    console.log(`perkama zvakiu: ${zvakes}, ju kaina ${galutineKaina}.`);
} else if (pradinisKainosDydis <= 1000) {
    console.log(`perkama zvakiu: ${zvakes}, ju kaina ${pradinisKainosDydis}.`);
}

/* 08.
Naudokite funkciją Math.random(). Sukurkite tris kintamuosius su atsitiktinėm reikšmėm nuo 0 iki 100. Paskaičiuokite jų aritmetinį vidurkį. Tada aritmetinį vidurkį atmetus tas reikšmes, kurios yra mažesnės nei 10 arba didesnės nei 90. Abu vidurkius atspausdinkite. Rezultatus apvalinkite iki sveiko skaičiaus.
*/
console.log("---------------------------");
let mark1 = Math.floor(Math.random() * 101);
let mark2 = Math.floor(Math.random() * 101);
let mark3 = Math.floor(Math.random() * 101);

console.log(`pirmas pazymys: ${mark1}, antras pazymys: ${mark2}, trecias pazymys: ${mark3} `);

let vidurkis = (mark1 + mark2 + mark3) / 3;

console.log(`vidurkis neatmetus reiksmiu: ${vidurkis.toFixed(2)}`);

let countValidMarks = 0;
let sumValidMarks = 0;

if (mark1 >= 10 && mark1 <= 90) {
    countValidMarks++;
    sumValidMarks += mark1;
};
if (mark2 >= 10 && mark2 <= 90) {
    countValidMarks++;
    sumValidMarks += mark2;
};
if (mark3 >= 10 && mark3 <= 90) {
    countValidMarks++;
    sumValidMarks += mark3;
};

if (countValidMarks > 0) {
    let avg = (sumValidMarks / countValidMarks);
    console.log(`vidurkis is atmestu pazymiu: ${avg.toFixed(2)}`);
} else {
    console.log("visi skaiciai buvo mazesni uz 10 arba didesni uz 90");
};
console.log("---------------------------");

/* 09.
Padarykite skaitmeninį laikrodį, rodantį valandas, minutes ir sekundes. Valandom, minutėm ir sekundėm sugeneruoti panaudokite funkciją Math.random(). Sugeneruokite skaičių nuo 0 iki 300. Tai papildomos sekundės. Skaičių pridėkite prie jau sugeneruoto laiko. Atspausdinkite laikrodį prieš ir po sekundžių pridėjimo ir pridedamų sekundžių skaičių.
*/
let valanda = Math.floor(Math.random() * 24);
let minute = Math.floor(Math.random() * 60);
let sekundes = Math.floor(Math.random() * 60);
console.log(valanda, minute, sekundes);
let papildomosSekundes = Math.floor(Math.random() * 301);
console.log("papildomos sekundes: ",papildomosSekundes);
let daugiauSekundziu = 0;

sekundes += papildomosSekundes;

if (sekundes >= 60) {
    minute += Math.floor(sekundes / 60);
    sekundes %= 60;

    if (minute >= 60) {
        valanda += Math.floor(minute / 60);
        minute %= 60;

        if (valanda >= 24) {
            valanda %= 24;
        };
    };
};

console.log(`po sekundziu pridejimo: ${valanda}:${minute}:${sekundes}`);



/* 10.
Naudokite funkciją Math.random(). Sugeneruokite 6 kintamuosius su atsitiktinėm reikšmėm nuo 1000 iki 9999. Atspausdinkite reikšmes viename string'e, išrūšiuotas nuo didžiausios iki mažiausios, atskirtas tarpais. Naudoti ciklų ir masyvų NEGALIMA.
*/
let e = Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000;
let f = Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000;
let g = Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000;
let h = Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000;
let i = Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000;
let j= Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000;
let sortedNumbers = [e, f, g, h, i, j].sort((maziausias, didziausias) => didziausias - maziausias);
let result1 = sortedNumbers.join(" ");

console.log(result1);
