// 01 - Spremi svoje godine (dob, broj rođendana) u varijablu. izračunaj koliko imaš godina u psećim godinama, pa rezultat ispiši na konzolu.

let myYear = 33;
let dogYear = myYear * 7;

console.log(dogYear);

// 02 - Spremi svoje ime i prezime u zasebne varijable, konkateniraj te varijable u treću varijablu, te ispiši vrijednost treće varijable na konzolu.

let fName = `Mateo`;
let lName = `Ciric`;
let fullName = fName.concat(' ', lName);

console.log(fullName);

// 03 - Koristeći varijable, napiši program koji uzima dva cjelobrojna broja između 1 i 20, te na konzolu ispisuje njihov ostatak pri dijeljenju.

let num1 = Math.round(Math.random(1) * 10 + 10);
let num2 = Math.ceil(Math.random(1) * 10);
let result = num1 % num2;

if( isNaN(result) ) {
    console.log(`divided by zero`)
} else {
    console.log(num1, num2, result);
}

// 04 - Kreiraj varijablu koja prati broj polaznika Brainlab akademije. početna vrijednost je 22. nakon nekog vremena, 2 nova polaznika su se upisala. nakon toga su se 3 polaznika ispisala. nakon toga se 5 novih polaznika upisalo. nakon svakog koraka ispiši vrijednost varijable u konzolu.

let initNumStudents = 22;
let currNumStudents = initNumStudents;

currNumStudents += 2;
console.log(currNumStudents);

currNumStudents -= 3;
console.log(currNumStudents);

currNumStudents += 5;
console.log(currNumStudents);

// 05 - Pokušaj pogoditi što će se ispisati na konzoli:

// console.log("3" + 3); -> 33
// console.log(5 + 12); -> 17
// console.log(5 + "4"); -> 54
// console.log("My points: " + 4 + 9); -> "My points: 49"
// console.log(2 + 2); -> 4
// console.log("11" + "14"); -> 1114

// 06 - Svoje puno ime i prezime ispiši na konzoli, pa ga pretvori u velika slova i ispiši na konzoli, pa ponovno pretvori u sva mala slova i ispiši na konzoli.
let myName = `Mateo Ciric`;

console.log(myName);

let myNameCapital = myName.toUpperCase();

console.log(myNameCapital);

let myNameSmall = myNameCapital.toLowerCase();

console.log(myNameSmall);

// 07 - Nekom od naredbi s predavanja provjeri koliko tvoje ime i prezime ima znakova
let firstName = `Mateo`;
let lastName = `Ciric`;
let numOfChar = fName.length + lName.length;

console.log(numOfChar);