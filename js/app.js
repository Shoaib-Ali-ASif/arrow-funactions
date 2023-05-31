// Find the area of a rectangle where the length is 5 and the width is 8.

let areaOfRectangle = (length, Width) => length * Width;

console.log(areaOfRectangle(5, 8));

// Find the area of a triangle where the base is 4 and the height is 3.

let areaOfTriangle = (base, height) => (base + height) / 2;

console.log(areaOfTriangle(4, 3));

// Check two given numbers and return true if one of the numbers is 50 or if their sum is 50.

let check = (numOne, numTwo) =>
  numOne == 50 || numTwo == 50 || numOne + numTwo == 50 ? "true " : "false";

console.log(check(50, 50));

// sum:

let sum = (num1, num2) => num1 + num2;
console.log(`Sum is: ${sum(4, 2)}`); 

// Check whether a given number is even or odd. 

let evenOrOdd = Number => Number % 2 == 0 ? 'even' : 'odd'

console.log(evenOrOdd (99));

// Find the area of a circle where the radius is 3.

let areaOfCircle = (radius) => Math.PI * radius * radius ;
console.log(areaOfCircle(2));