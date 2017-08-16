//function that takes the input, validates it, and runs the appropriate Euler function and returns the output string.
function runInput(inputX, funcName) {
  var value = Number(inputX.value);
  if (!isNaN(value)) {
    var result = funcName(value);
    return "The result is : " + result;
  } else {
    return "You did not enter a valid number.";
  }
}

//sets the query variable to the querySelector method.
var query = document.querySelector.bind(document);

var textMult = document.querySelector('.textMult');
var submitMult = document.querySelector('.submitMult');
var outputMult = document.querySelector('.outputMult');

submitMult.addEventListener('click', runMult);

//runs the click function that calls the runInput function.
function runMult() {
  outputMult.textContent = runInput(textMult, mult35);
}

// Multiples of 3 and 5
function mult35(max) {
  var total = 0;
  //loops through numbers from 3 to max - 1.  If numbers are divisible by 3 or 5, add to total
  for (var i = 3; i < max; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      total += i;
    }
  }
  return total;
}

// Multiples of 2 numbers that are less than max
function multiples(x,y,max) {
  //declares array to store multiples and sum to store total
  var arr = [];
  var sum = 0;
  //loops through numbers from min of (x,y) to max - 1, add to array (and add to sum) if divisible by x or y
  for (var i = Math.min(x,y); i < max; i++) {
    if (i % x === 0 || i % y ===0) {
      arr.push(i);
      sum += i;
    }
  }
  return {multiples: arr, sum: sum};
}

// Even Fibonacci numbers
var textFib = document.querySelector('.textFib');
var submitFib = document.querySelector('.submitFib');
var outputFib = document.querySelector('.outputFib');

submitFib.addEventListener('click', runFib);

function runFib() {
  outputFib.textContent = runInput(textFib, fib);
  // var valueFib = Number(textFib.value);
  // if (!isNaN(valueFib)) {
  //   var resultFib = fib(valueFib);
  //   outputFib.textContent = "The result is : " + resultFib;
  // } else {
  //   outputFib.textContent = "You did not enter a valid number.";
  // }
}

//Returns the sum of all even term Fibonacci sequence less than the max.
function fib(max) {
  var i = 0;
  var j = 1;
  var sum = 0;
  var temp = 0;
  while (j < max) {
    if (j % 2 == 0) {
      sum += j;
    }
    temp = j;
    j = i + j;
    i = temp;
  }
  return sum;
}

//Fibonacci number function using recursion
function fibonacci(n) {
  if (n === 1 || n === 2) {
    return 1;
  } else {
    return fibonacci(n-1) + fibonacci(n-2);
  }
}

// Largest Prime Factor - bad
// function primefactor(max) {
//   for (var i = max; i > 0; i--) {
//     if (i % max == 0) {
//       console.log(i)
//       for (var j = 2; j <= i; j++) {
//         if (j == i) {
//           return i
//         }
//         if (i % j == 0) {
//           break
//         }
//       }
//     }
//   }
// }

// Largest Prime Factor - good
var textLPF = document.querySelector('.textLPF');
var submitLPF = document.querySelector('.submitLPF');
var outputLPF = document.querySelector('.outputLPF');

submitLPF.addEventListener('click', runLPF);

function runLPF() {
  outputLPF.textContent = runInput(textLPF, primefactor);
  // var valueLPF = Number(textLPF.value);
  // if (!isNaN(valueLPF)) {
  //   var resultLPF = primefactor(valueLPF);
  //   outputLPF.textContent = "The result is : " + resultLPF;
  // } else {
  //   outputLPF.textContent = "You did not enter a valid number.";
  // }
}

//Function that returns the largest prime factor of a given input number.
function primefactor(max) {
  var pfactors = [];
  //Starts with the smallest prime number -2.
  var factor = 2;
  //Sets remainder to the max.
  var remain = max;
  //Loops through the remainder, and increment the factor.
  while (remain > 1) {
    //If remainder is divisible by factor, adds it to the array (it is a prime factor), divide the remainder by factor repeatedly until remainder is no longer a multiple of the factor.
    while (remain % factor === 0) {
      pfactors.push(factor);
      remain = remain / factor;
    }
    factor++;
    // console.log("factor is: " + factor)
    // console.log("remain is: " + remain)
    if (factor * factor > remain) {
      if (remain > 1) {
        pfactors.push(remain);
      }
      break;
    }
  }
  // console.log(pfactors);
  return pfactors.pop();
}

//Problem 4 - Largest palindrome product
String.prototype.reverse = function() {
	return this.split("").reverse().join("")
}

function isPalin(x) {
  return String(x) === String(x).reverse();
}

//Palindrome product check
function palinProduct() {
  var x = 999;
  var y = 999;
  var result = [];
  for (var i = 0; x > 900 || y > 900; i++) {
    // console.log('x is : ' + x)
    // console.log('y is : ' + y)
    // console.log('x*y is : ' + x * y)
    // console.log("product is Palindrome? " + isPalin(x * y))
    if (isPalin(x * y)) {
      // return {x: x, y: y, product: x * y};
      result.push(x * y);
    }
    if (x === y) {
      y--;
      x = 999;
    } else {
      x--;
    }
  }
  var max = -Infinity;
  for (var i = 0; i < result.length; i++) {
    if (max < result[i]) {
      max = result[i];
    }
  }
  return max;
}

//Palindrome function with input
function palinProductN(n) {
  var xInit = Number(Math.pow(10, n) - 1);
  var yInit = Number(Math.pow(10, n) - 1);
  var x = xInit;
  var y = yInit;
  // console.log('initial x and y are : ' + x + " " + y)
  var result = [];
  for (; x > (xInit * 0.9) || y > (yInit * 0.9);) {
    // console.log('x is : ' + x)
    // console.log('y is : ' + y)
    // console.log('x*y is : ' + x * y)
    // console.log("product is Palindrome? " + isPalin(x * y))
    if (isPalin(x * y)) {
      // return {x: x, y: y, product: x * y};
      result.push({x: x, y: y, product: x * y});
    }
    if (x === y) {
      y--;
      x = xInit;
    } else {
      x--;
    }
  }
  var max = {x: 0, y: 0, product: -Infinity};
  for (var i = 0; i < result.length; i++) {
    if (max.product < result[i].product) {
      max = result[i];
    }
  }
  return max;
}

//Problem 5 - Smallest Multiple or LCM

//find the LCM for a set of numbers.  Find the prime factors and multiply each prime the greatest numbers of times it occus in the set.
// 12: 2 × 2 × 3
// 80: 2 × 2 × 2 × 2 × 5 = 80
// LCM: 2 x 2 x 2 x 2 x 3 x 5

//function for finding the prime factors of a given input number
function primefactorsArr(max) {
  var pfactors = [];
  var factor = 2;
  var remain = max;
  while (remain > 1) {
    while (remain % factor === 0) {
      pfactors.push(factor);
      remain = remain / factor;
    }
    factor++;
    if (factor * factor > remain) {
      if (remain > 1) {
        pfactors.push(remain);
      }
      break;
    }
  }
  return pfactors;
}

function smallestMultiple(max) {
  var primeFactors = [];
  //get a list of prime factors between 1 and max.  Returns a 3D array where each index is an array of the prime factors for each number.
  for (var i = 1; i <= max; i++) {
    primeFactors.push(primefactorsArr(i));
  }
  //variable to store the lcm factors after removing the duplicates.
  var lcmFactors = []
  //loop running through each of the prime factor arrays .
  for (var i = 0; i < primeFactors.length; i++) {
    //loop running through each prime factor starting at 2, and ending at each original number.
    for (var j = 2; j <= i+1; j++) {
      var tempArr = [];
      //loop that compares the result array and the prime factor arrays, and store only the "most occurrance" of the prime factor.  ie:  if result array has two "2"s, and prime factor arrays has four "2"s, it changes the result array to four "2"s.
      while (true) {
        var xIndex = lcmFactors.indexOf(j);
        // console.log("xIndex is :" + xIndex)
        var yIndex = primeFactors[i].indexOf(j);
        // console.log("yIndex is : " + yIndex)
        if (xIndex != -1 && yIndex != -1) {
          lcmFactors.splice(xIndex, 1);
          primeFactors[i].splice(yIndex, 1);
          tempArr.push(j);
          // console.log("tempArr is now : " + tempArr)
        } else if (xIndex === -1 && yIndex != -1) {
          primeFactors[i].splice(yIndex, 1);
          tempArr.push(j);
          // console.log("tempArr is now : " + tempArr)
        } else {
          break;
        }
      }
      lcmFactors = tempArr.concat(lcmFactors);
      // console.log("lcmFactors is now : " + lcmFactors)
    }
  }
  // console.log("this is the lcmFactors : " + lcmFactors)
  var sum = 1;
  //loop multiplying all the numbers in the result array.
  for (var i = 0; i < lcmFactors.length; i++) {
    sum = sum * lcmFactors[i];
  }
  return sum;
}

//Problem 6 - Sum Square Difference.  Find the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum.
function sumOfSquared(max) {
  var sum = 0;
  for (var i = 1; i <= max; i++) {
    sum += i * i;
  }
  return sum;
}

function squaredOfSum(max) {
  var sum = 0;
  for (var i = 1; i <= max; i++) {
    sum += i;
  }
  sum = sum * sum;
  return sum;
}

function squaredSumDiff(max) {
  return squaredOfSum(max) - sumOfSquared(max);
}

//Problem 7 - 1001st prime
//prime finder.
function isPrime(num){
  if (num != 2 && num % 2 === 0) return false;
  for (var i = 3; i <= Math.sqrt(num); i += 2) {
    if(num % i === 0) {
      return false;
    }
  }
  return true;
}

//generates a prime list from 2 - max
function primeList(max) {
  var primelist = []
  for (var i = 2; i <= max; i++) {
    if (isPrime(i)) {
      primelist.push(i);
    }
  }
  return primelist;
}

//generates a prime list containing n number of primes.
function nPrimeList(n) {
  var primelist = []
  for (var i = 2; primelist.length < n; i++) {
    if (isPrime(i)) {
      primelist.push(i);
    }
  }
  return primelist;
}

//return the nth prime starting at 2.
function findNthPrime(n) {
  return nPrimeList(n).pop();
}

//Problem 8 - Largest product in a series.
function largestProduct() {
  var series = "7316717653133062491922511967442657474235534919493496983520312774506326239578318016984801869478851843858615607891129494954595017379583319528532088055111254069874715852386305071569329096329522744304355766896648950445244523161731856403098711121722383113622298934233803081353362766142828064444866452387493035890729629049156044077239071381051585930796086670172427121883998797908792274921901699720888093776657273330010533678812202354218097512545405947522435258490771167055601360483958644670632441572215539753697817977846174064955149290862569321978468622482839722413756570560574902614079729686524145351004748216637048440319989000889524345065854122758866688116427171479924442928230863465674813919123162824586178664583591245665294765456828489128831426076900422421902267105562632111110937054421750694165896040807198403850962455444362981230987879927244284909188845801561660979191338754992005240636899125607176060588611646710940507754100225698315520005593572972571636269561882670428252483600823257530420752963450";

  var productArr = []
  for (var i = 0; i < series.length; i++) {
    var product = 1;
    for (var j = i; j < i+13; j++) {
      product = product * series[j]
    }
    productArr.push(product);
  }
  var largestProd = -Infinity
  for (var i = 0; i < productArr.length; i++) {
    if (productArr[i] > largestProd) {
      largestProd = productArr[i];
    }
  }
  return largestProd;
}

//Problem 9 - Special Pythagorean triplet
//There exists exactly one Pythagorean triplet for which a + b + c = 1000.
//Find the product abc.

//Using the following Pythagorean triplet theorem:
// When m and n are any two positive integers (m < n):
//
// a = 2nm
// b = n2 - m2
// c = n2 + m2

// let a + b + c = x
// m = x/2n - n
// x/2n - n > 0
// squareroot(x/2) > n

function pyTriplet(sum) {
  var n = 0;
  var m = 0;
  for (var i = 1; i < Math.sqrt(sum/2); i++) {
    if ((sum / 2) % i === 0  && i > (sum / 2 / i - i)) {
      m = (sum / 2) / i - i;
      n = i;
    }
  }
  var a = 2 * n * m;
  var b = Math.pow(n,2) - Math.pow(m,2);
  var c = Math.pow(n,2) + Math.pow(m,2);

  return a * b * c;
  // for (var i = 1; i < 333; i++) {
  //   for (var j = i+1; i < 334; j++) {
  //     for (var k = (1000 - i - j); i < 335; k++) {
  //       if (Math.pow(i,2) + Math.pow(j,2) === Math.pow(k,2))
  //         return i * j * k;
  //     }
  //   }
  // }
}

//Problem 10 - Summation of primes
// The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.
// Find the sum of all the primes below two million.

//prime list function using Sieve of Eratosthenes algorithm
function primeListFinder(max) {
  // console.time();
  var numList = [];
  for (let i = 0; i <= max; i++) {
    numList.push(true);
  }
  //turn all even index to false
  for (let i = 4; i < numList.length; i+=2) {
    numList[i] = false;
  }
  for (let i = 3; i < Math.sqrt(numList.length); i+=2) {
    if (numList[i] != false) {
      for (let j = i; i * j < numList.length; j+=2) {
        numList[i * j] = false;
      }
    }
  }
  var primeList = [];
  for (let i = 2; i < numList.length; i++) {
    if (numList[i]) {
      primeList.push(i);
    }
  }
  // console.timeEnd();
  return primeList;
}

// function to sum all primes from 1 - max
function sumPrimes(max) {
  var primeList = primeListFinder(max);
  var primeSum = 0;
  primeList.forEach(value => primeSum += value);
  return primeSum;
}


