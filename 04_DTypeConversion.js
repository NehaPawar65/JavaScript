// 1. STRING TO NUMBER
console.log("----- String to Number -----");

let age = "21";

console.log("Original value:", age);
console.log("Original type:", typeof age);

let convertedAge = Number(age);

console.log("Converted value:", convertedAge);
console.log("Converted type:", typeof convertedAge);


// 2. NUMBER TO STRING
console.log("\n----- Number to String -----");

let marks = 85;

console.log("Original value:", marks);
console.log("Original type:", typeof marks);

let convertedMarks = String(marks);

console.log("Converted value:", convertedMarks);
console.log("Converted type:", typeof convertedMarks);


// 3. STRING TO BOOLEAN
console.log("\n----- String to Boolean -----");

let name = "Neha";

console.log("Original value:", name);
console.log("Original type:", typeof name);

let convertedName = Boolean(name);

console.log("Converted value:", convertedName);
console.log("Converted type:", typeof convertedName);


// 4. NUMBER TO BOOLEAN
console.log("\n----- Number to Boolean -----");

let number1 = 10;
let number2 = 0;

console.log(Boolean(number1)); // true
console.log(Boolean(number2)); // false


// 5. BOOLEAN TO NUMBER
console.log("\n----- Boolean to Number -----");

let value1 = true;
let value2 = false;

console.log(Number(value1)); // 1
console.log(Number(value2)); // 0


// 6. BOOLEAN TO STRING
console.log("\n----- Boolean to String -----");

let isStudent = true;

let studentString = String(isStudent);

console.log(studentString);
console.log(typeof studentString);


// 7. IMPLICIT TYPE CONVERSION
console.log("\n----- Implicit Type Conversion -----");

let x = "10";
let y = 5;

let result1 = x + y;

console.log(result1);        // "105"
console.log(typeof result1); // string


// 8. IMPLICIT STRING TO NUMBER
let result2 = x - y;

console.log(result2);        // 5
console.log(typeof result2); // number


// 9. USING parseInt()
console.log("\n----- parseInt() -----");

let value3 = "100px";

let number3 = parseInt(value3);

console.log(number3);        // 100
console.log(typeof number3); // number


// 10. USING parseFloat()
console.log("\n----- parseFloat() -----");

let value4 = "25.75kg";

let number4 = parseFloat(value4);

console.log(number4);        // 25.75
console.log(typeof number4); // number

// console.log((null).toString());

// console.log((undefined).toString());