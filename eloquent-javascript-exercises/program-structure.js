//1. Looping a triangle
//My solution:
let string = "";

for (let i = 0; i < 7; i++) {
  string += "#";
  console.log(string);
}

//His solution:

for (let line = "#"; line.length < 8; line += "#") console.log(line);

//2. FizzBuzz
//My solution:

for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}

//His solution

for (let n = 1; n <= 100; n++) {
  let output = "";
  if (n % 3 == 0) output += "Fizz";
  if (n % 5 == 0) output += "Buzz";
  console.log(output || n);
}

//3.Chessboard
//My solution:
let chessboard = "";

function createChessboard(size) {}
