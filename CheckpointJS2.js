// ==========================================
// STRING MANIPULATION FUNCTIONS
// ==========================================

// 1. Reverse a String
function reverseString(str) {
    return str.split("").reverse().join("");
}

console.log(reverseString("Hello"));
// Output: "olleH"


// 2. Count Characters
function countCharacters(str) {
    return str.length;
}

console.log(countCharacters("Hello World"));
// Output: 11


// 3. Capitalize Words
function capitalizeWords(sentence) {
    return sentence
        .split(" ")
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");
}

console.log(capitalizeWords("hello world javascript"));
// Output: "Hello World Javascript"


// ==========================================
// ARRAY FUNCTIONS
// ==========================================

// 4. Find Maximum
function findMaximum(numbers) {
    return Math.max(...numbers);
}

console.log(findMaximum([10, 5, 20, 8, 15]));
// Output: 20


// 5. Find Minimum
function findMinimum(numbers) {
    return Math.min(...numbers);
}

console.log(findMinimum([10, 5, 20, 8, 15]));
// Output: 5


// 6. Sum of Array
function sumArray(numbers) {
    return numbers.reduce((sum, number) => sum + number, 0);
}

console.log(sumArray([1, 2, 3, 4, 5]));
// Output: 15


// 7. Filter Array
function filterArray(numbers, condition) {
    return numbers.filter(condition);
}

// Example: keep numbers greater than 10
const numbers = [5, 12, 8, 20, 3, 15];

console.log(filterArray(numbers, number => number > 10));
// Output: [12, 20, 15]


// ==========================================
// MATHEMATICAL FUNCTIONS
// ==========================================

// 8. Factorial
function factorial(n) {
    if (n < 0) {
        return "Factorial is not defined for negative numbers";
    }

    let result = 1;

    for (let i = 1; i <= n; i++) {
        result *= i;
    }

    return result;
}

console.log(factorial(5));
// Output: 120


// 9. Prime Number Check
function isPrime(number) {
    if (number < 2) {
        return false;
    }

    for (let i = 2; i < number; i++) {
        if (number % i === 0) {
            return false;
        }
    }

    return true;
}

console.log(isPrime(7));
// Output: true

console.log(isPrime(10));
// Output: false


// 10. Fibonacci Sequence
function fibonacci(n) {
    let sequence = [];

    let a = 0;
    let b = 1;

    for (let i = 0; i < n; i++) {
        sequence.push(a);

        let next = a + b;
        a = b;
        b = next;
    }

    return sequence;
}

console.log(fibonacci(10));
// Output: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]