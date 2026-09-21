let a = 5;
let b = 10;

// Addition
let sum = a + b;
console.log("Sum:", sum); // Output: Sum: 15

// Subtraction
let difference = b - a;
console.log("Difference:", difference); // Output: Difference: 5        

// Multiplication
let product = a * b;
console.log("Product:", product); // Output: Product: 50

// Division
let quotient = b / a;
console.log("Quotient:", quotient); // Output: Quotient: 2

// Modulus
let remainder = b % a;
console.log("Remainder:", remainder); // Output: Remainder: 0

// Increment
a++;
console.log("Incremented a:", a); // Output: Incremented a: 6

// Decrement
b--;
console.log("Decremented b:", b); // Output: Decremented b: 9



// Comparison Operators
let x = 5;
let y = 10;     

if (x < y) {
    console.log("x is less than y"); // Output: x is less than y
}   

if (x > y) {
    console.log("x is greater than y");
}   

if (x <= y) {
    console.log("x is less than or equal to y"); // Output: x is less than or equal to y
}

if (x >= y) {
    console.log("x is greater than or equal to y");
}   

if (x == y) {
    console.log("x is equal to y");
}

if (x != y) {
    console.log("x is not equal to y"); // Output: x is not equal to y
}   

if (x === y) {
    console.log("x is strictly equal to y");
}       // Strict equality checks both value and type

// Logical Operators
let p = true; 
let q = false;

if (p && q) {   
    console.log("p and q are both true");
}

if (p || q) {
    console.log("At least one of p or q is true"); // Output: At least one of p or q is true
}

if (!p) {
    console.log("p is false");
}   

if (!q) {
    console.log("q is false"); // Output: q is false
}


// Ternary Operator
let age = 18;
let canVote = (age >= 18) ? "Yes, can vote" : "No, cannot vote";
console.log(canVote); // Output: Yes, can vote  


// Assignment Operators
let num = 10;
num += 5;   
console.log("After += 5:", num); // Output: After += 5: 15

num -= 3;   
console.log("After -= 3:", num); // Output: After -= 3: 12

num *= 2;
console.log("After *= 2:", num); // Output: After *= 2: 24  

num /= 4;
console.log("After /= 4:", num); // Output: After /= 4: 6


// Bitwise Operators
let bitA = 5;   
let bitB = 3;

console.log("Bitwise AND:", bitA & bitB);
console.log("Bitwise OR:", bitA | bitB);
console.log("Bitwise XOR:", bitA ^ bitB);
console.log("Bitwise NOT:", ~bitA);
console.log("Left Shift:", bitA << 1);
console.log("Right Shift:", bitA >> 1); 


// Typeof Operator
console.log("Type of a:", typeof a);


// Operator Precedence
let result = 10 + 5 * 2;    

console.log("Result of 10 + 5 * 2:", result); // Output: Result of 10 + 5 * 2: 20


