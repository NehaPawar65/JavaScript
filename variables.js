const c = 3.14; 
let l = "34"; 
var v = "1234";
/* used in old version - drawback is we can redeclare the same var . so it creates ambiguity.
not to prefer because of issue of block scope and functional scope 
*/

city = "Sangli"; 
let age; 

l = "5"; 
v = "34"; 
city = "Ishwarpur"; 

console.log(l); 
// console.log(b); - ReferenceError: b is not defined
console.table([c, l, v, city, age]); // Wrapped in an array for a clean table view

var v = 3455;
console.log(v);

// let l = 234;   gives Syntax error  - SyntaxError: Identifier 'l' has already been declared
// console.log(l);