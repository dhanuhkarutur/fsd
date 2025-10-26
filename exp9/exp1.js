// 1. Find factorial of a number
function getFactorial(num) {
  if (num < 0) return "Negative numbers don't have factorials.";
  let res = 1;
  for (let i = num; i >= 1; i--) {
    res *= i;
  }
  return `Factorial of ${num} = ${res}`;
}

// 2. Generate Fibonacci sequence up to 'num'
function getFibonacci(num) {
  if (num <= 0) return "Enter a number greater than 0.";
  let fib = [0, 1];
  for (let i = 2; i < num; i++) {
    fib.push(fib[i - 1] + fib[i - 2]);
  }
  return `Fibonacci series (${num} terms): ${fib.slice(0, num).join(" , ")}`;
}

// 3. Display all prime numbers up to 'num'
function listPrimes(num) {
  if (num < 2) return "No primes below 2.";
  let result = [];
  for (let i = 2; i <= num; i++) {
    let primeFlag = true;
    for (let k = 2; k <= Math.sqrt(i); k++) {
      if (i % k === 0) {
        primeFlag = false;
        break;
      }
    }
    if (primeFlag) result.push(i);
  }
  return `Prime numbers up to ${num}: ${result.join(", ")}`;
}

// 4. Check if number is palindrome
function checkPalindrome(num) {
  const original = num.toString();
  const reversed = [...original].reverse().join("");
  if (original === reversed)
    return `${num} is a Palindrome number.`;
  else
    return `${num} is not a Palindrome number.`;
}
