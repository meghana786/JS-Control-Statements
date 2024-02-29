// Challenge 1: Create a for loop to print all the even numbers till 100 in the console.
console.log("The even number's upto 100 are:");
for (var i = 1; i <= 100; i++) {
  if (i % 2 == 0) {
    console.log(i);
  }
}
// Challenge 2: Create a while loop to print all the odd numbers till 100 in the console.
console.log("The odd number's upto 100 are:");
var n = 0;
while (n < 100) {
  n++;
  if (n % 2 != 0) {
    console.log(n);
  }
}
// Challenge 3: Create a do while loop to print all the multiples of 3 till 100 in the console.
console.log('Multiples of 3 upto 100 are:');
var m = 1;
do {
  m++;
  if (m % 3 == 0) {
    console.log(m);
  }
} while (m <= 100);
// Challenge 4: Create a for loop to print all the prime numbers till 100 in the console.
console.log("Prime number's upto 100 are");
function isPrime(number) {
  var b = true;
  for (var i = 2; i < number; i++) {
    if (number % i == 0) {
      b = false;
    }
  }
  if (b == true) {
    console.log(number);
  }
}
for (var i = 2; i <= 100; i++) {
  isPrime(i);
}
