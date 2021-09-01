/*BIDMAS
Brackets, roden og potens, division, multiplikation, addition, subtraktion.

*/

result = 10 *(20-3)**2;

console.log(result);


// Opgave 1
let grundlinje = 7;

let højde = 4;

let areal = grundlinje * (0.5 * højde);

console.log(areal);


//Opgave 2

const navn = "sara";

const efternavn = "andreasen";

let fuldtNavn = navn + efternavn;

let løn = 53000;

console.log(fuldtNavn + "får" + løn + "før skat");

let skat = 0.38;

let arbejdsmarkedsbidrag = 0.08;

let efterSkat = løn * skat - arbejdsmarkedsbidrag;

let message = "Min løn efter skat er" + løn * skat;

console.log(message);

let feriepenge = 0.125;

let optjenteFeriepenge = feriepenge * løn;

console.log(optjenteFeriepenge);



//Opagave 3

let navn1 = "sarah";

console.log(navn1.charAt(0).toUpperCase()+ navn1.slice(1));

let stortForbogstavFornavn = navn1[0].toUpperCase();
let forNavnUdenForBogstav = navn1.slice(1, navn1.length);

navn1 = stortForbogstavFornavn + forNavnUdenForBogstav;
console.log(navn1);

//Opgave 4

let sætning = "jeg vil have en god karakter til frontend eksamen";
console.log(sætning);
console.log(sætning.length);

let sætning1 = "jeg vil have en";

let ændring = "god";

let sætning2 = "karakter til frontend eksamen";

ændring = "top";

console.log(sætning1 + " " + ændring + " " + sætning2);

//Man kan også bruge .replace("god", "top") for at skifte værdien 

//Opgave 5

let beløbPåKonto = 12000;

beløbPåKonto += 5000;
console.log(beløbPåKonto);

beløbPåKonto -= 6700;
console.log(beløbPåKonto);

beløbPåKonto += 10000;
console.log(beløbPåKonto);
