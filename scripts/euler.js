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
