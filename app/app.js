// Uyga Vazifa 1

// headache - 1;
let number = 2;

if (number % 2 == 0) {
  console.log("A soni juft son");
} else {
  console.log("A soni juft emas");
}

// headache - 2;
let number1 = 3;
let number2 = 2;

if (number1 % 2 == 0) {
  console.log("A soni juft");
} else {
  console.log("A soni juft emas");
}

if (number2 % 2 == 0) {
  console.log("B soni juft");
} else {
  console.log("B soni juft emas");
}

// headache - 3;
let numberA = 3;
let numberB = 8;
let numberC = 10;

if (numberA < numberB && numberB < numberC) {
  console.log(`${numberA} < ${numberB} < ${numberC}`);
} else {
  console.log("hato");
}

// headache-4
let a = 9;
let b = 11;

if (a % 2 !== 0 && b % 2 !== 0) {
  console.log("A va B sonlari toq sonlar.");
} else {
  console.log("A va B sonlari yoki ulardan bittasi toq emas.");
}

// headache-5
let n1 = 1;
let n2 = 9;

if (n1 % 2 !== 0 && n2 % 2 !== 0) {
  console.log("A va B sonlari ikkalasi ham toq.");
} else if (n1 % 2 !== 0) {
  console.log("A soni toq");
} else if (n2 % 2 !== 0) {
  console.log("B soni toq");
} else {
  console.log("A va B sonlari ikkalasi ham juft.");
}

// headache-6
let m1 = 23;
let m2 = 22;

if (m1 % 2 !== 0 && m2 % 2 !== 0) {
  console.log("A va B sonlari ikkalasi ham toq.");
} else if (m1 % 2 !== 0) {
  console.log("A va B sonlarning faqat A soni toq son");
} else if (m2 % 2 !== 0) {
  console.log("A va B sonlari faqat B soni toq");
} else {
  console.log("A va B sonlari ikkalsi ham juft son");
}

// headache - 7
let a7 = 8;
let b7 = 9;
let c7 = 101;

if (a7 && b7 && c7 > 0) {
  console.log("Sonlarning har biri musbat");
} else {
  console.log("Sonlarning har biri musbat bulmasligi mumkun");
}

// headache - 8
let a8 = 8;
let b8 = -1;
let c8 = -12;

if (a8 && b8 && c8 > 0) {
  console.log("Sonlarning har biri musbat");
} else {
  console.log("Sonlarning faqat bittasi musbat son");
}

// headache - 9
let a9 = 8;
let b9 = -1;
let c9 = -12;

if (a9 && b9 && c9 > 0) {
  console.log("Sonlarning har biri musbat");
} else {
  console.log("Sonlarning faqat ikkitasi musbat son");
}

// headache - 10
let ikkiHonaliSon = 98;

if (ikkiHonaliSon > 9 && ikkiHonaliSon < 100 && ikkiHonaliSon % 2 === 0) {
  console.log("Berilgan son ikki xonali juft son.");
} else {
  console.log("Berilgan son ikki xonali juft son emas.");
}

// Uyga Vazifa 2
// headache-1 part 2

let tomonA = 8;
let tomonB = 12;

let S = tomonA * tomonB;
let P = 2 * (tomonA + tomonB);

console.log("Yuza: " + S, "Perimetr: " + P);

// headache - 2
let d = 21;

let pi = 3.14;
let r = d / 2;
let L = pi * d;
let S2 = pi * r ** 2;

console.log("Yuza: " + S2, "Uzuna: " + L);

// headache - 3
let a3 = 3;
let V = a3 ** 3;
let S3 = 6 * a ** 2;

console.log("Hajmi: " + V, "To`la sirti: " + S3);

// headache - 4
let a4 = 4;
let b4 = 5;
let c4 = 6;

let V4 = a4 * b4 * c4;
let S4 = 2 * (a4 * b4 + b4 * c4 + a4 * c4);

console.log("Hajmi: " + V4, "To`la sirti: " + S4);

// heaache - 5
let sonA = 53;
let sonB = 23;

let M = (sonA + sonB) / 2;

console.log("O`rta arifmetigi: " + M);

// headache - 6
let katetA = 3;
let katetB = 4;

let gip = Math.sqrt(katetA ** 2 + katetB ** 2);
let per = katetA + katetB + gip;

console.log("Gipatinuza: " + gip, "Perimetr: " + per);

// headache - 7
let r1 = 13;
let r2 = 11;
// r1 > r2
let yuzaS1 = pi * r1;
let yuzaS2 = pi * r2;
let ayirmaS = pi * (r1 ** 2 - r2 ** 2);

console.log(
  "S1: " + yuzaS1,
  "S2: " + yuzaS2,
  "Ularning ayirmasi S: " + ayirmaS
);

// headache - 8
let L8 = 70;
let R8 = L8 / (2 * pi);
let S8 = pi * R8 ** 2;

console.log("radiusi R: " + R8, "yuzasi S: " + S8);

// headache - 9
let x1 = 10;
let y1 = 8;
let x2 = 6;
let y2 = 7;

let masofaL = Math.sqrt((x1 - x2) ** 2 + (y1 - y2) ** 2);

console.log("orasidagi L masofa: " + masofaL);

// headache - 10

let aQiymat = 100;
let bQiymat = 78;
let cQiymat = 45;

let temp = aQiymat;

aQiymat = bQiymat;
bQiymat = cQiymat;
cQiymat = temp;

console.log("A: " + aQiymat, "B: " + bQiymat, "C: " + cQiymat);
