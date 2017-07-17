// Multiples of 3 and 5
function multiples35(x,y,max) {
  arr = []
  for (var i = 1; x * i < max; i++) {
    arr.push(x * i)
  }
  for (var j = 1; y * j < max; j++) {
    arr.push(y * j)
  }
  var sum = 0
  for (var k = 1; (x * y * k) < max; k++) {
    var index = arr.indexOf(x * y * k)
    arr.splice(index,1)
  }
  for (var i = 0; i < arr.length; i++) {
    sum += arr[i]
  }
  console.log(arr)
  return sum
}

function solution(number) {
    var total = 0;
    for (var i = 3; i < number; i++)
    {
        if (i % 3 === 0 || i % 5 === 0)
        {
            total += i;
        }
    }
    return total;
}

// Even Fibonacci numbers
function fib(max) {
  var i = 0
  var j = 1
  var sum = 0
  var temp = 0
  while (j < max) {
    if (j % 2 == 0) {
      sum += j
    }
    temp = j
    j = i + j
    i = temp
  }
  return sum
}

// Largest Prime Factor - bad
function primefactor(max) {
  for (var i = max; i > 0; i--) {
    if (i % max == 0) {
      console.log(i)
      for (var j = 2; j <= i; j++) {
        if (j == i) {
          return i
        }
        if (i % j == 0) {
          break
        }
      }
    }
  }
}

// Largest Prime Factor - good
function primefactor(max) {
  var pfactors = []
  var factor = 2
  var remain = max
  while (remain > 1) {
    while (remain % factor == 0) {
      pfactors.push(factor)
      remain = remain / factor
    }
    factor++
    console.log("factor is: " + factor)
    console.log("remain is: " + remain)
    if (factor * factor > remain) {
      if (remain > 1) {
        pfactors.push(remain)
      }
      break
    }
  }
  console.log(pfactors)
  return pfactors.pop()
}
