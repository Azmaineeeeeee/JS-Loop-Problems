// Display sum of all the odd numbers from 81 to 131.
// using for loop
let sumOdd = 0;
for (odd = 81; odd <= 131; odd++) {
  if (odd % 2 == 1) {
    console.log(odd);
    sumOdd = sumOdd + odd;
  }
}
console.log("Sum of odd numbers:", sumOdd);

//using while loop

let Odd = 81;
let SumOdd = 0;

while (Odd <= 131) {
  if (Odd % 2 == 1) {
    SumOdd = SumOdd + Odd;
    console.log(Odd);
  }
  Odd++;
}
console.log("Sum of Odd numbers:", SumOdd);


// Display sum of all the even numbers from 206 to 311.

// using for loop
let sumEven = 0;
for (even = 206; even <= 311; even++) {
  if (even % 2 == 0) {
    console.log(even);
    sumEven = sumEven + even;
  }
}
console.log("Sum of even numbers:", sumEven);

//using while loop

let Even = 206;
let SumEven = 0;

while (Even <= 311) {
  if (Even % 2 == 0) {
    SumEven = SumEven + Even;
    console.log(Even);
  }
  Even++;
}
console.log("Sum of Even numbers:", SumEven);

