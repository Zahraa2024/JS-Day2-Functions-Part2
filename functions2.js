// task 1 //
function isOdd(n) {
  if (n % 2 == 0) {
    return "false";
  } else {
    return "true";
  }
}
let result1 = isOdd(3);
console.log(result1);

// task 2 //

function oddsSmallerThan(n) {
  if (n % 2 == 0) {
    return n / 2;
  } else {
    return (n - 1) / 2;
  }
}
let result2 = oddsSmallerThan(15);
console.log(result2);

// task 3 //
function squareOrDouble(n) {
  if (n % 2 == 0) {
    return 2 * n;
  } else {
    return n * n;
  }
}
let result3 = squareOrDouble(9);
console.log(result3);
