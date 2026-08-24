// ==========================================
// STRING MANIPULATION FUNCTIONS
// ==========================================

// 1. Reverse a String
function reverseString(str) {
    var result = "";

    for (var i = str.length - 1; i >= 0; i--) {
        result = result + str[i];
    }

    return result;
}

console.log(reverseString("Hello"));
// Output: "olleH"


// ==========================================
// 2. Count Characters
// ==========================================

function countCharacters(str) {
    var count = 0;

    for (var i = 0; str[i] !== undefined; i++) {
        count++;
    }

    return count;
}

console.log(countCharacters("Hello World"));
// Output: 11


// ==========================================
// 3. Capitalize Words
// ==========================================

function capitalizeWords(sentence) {
    var result = "";
    var capitalizeNext = true;

    for (var i = 0; sentence[i] !== undefined; i++) {

        if (sentence[i] === " ") {
            result = result + " ";
            capitalizeNext = true;
        } 
        else {
            if (capitalizeNext === true) {
                result = result + sentence[i].toUpperCase();
                capitalizeNext = false;
            } 
            else {
                result = result + sentence[i];
            }
        }
    }

    return result;
}

console.log(capitalizeWords("hello world javascript"));
// Output: "Hello World Javascript"


// ==========================================
// ARRAY FUNCTIONS
// ==========================================

// 4. Find Maximum
function findMaximum(numbers) {
    var max = numbers[0];

    for (var i = 1; i < numbers.length; i++) {
        if (numbers[i] > max) {
            max = numbers[i];
        }
    }

    return max;
}

console.log(findMaximum([10, 5, 20, 8, 15]));
// Output: 20


// ==========================================
// 5. Find Minimum
// ==========================================

function findMinimum(numbers) {
    var min = numbers[0];

    for (var i = 1; i < numbers.length; i++) {
        if (numbers[i] < min) {
            min = numbers[i];
        }
    }

    return min;
}

console.log(findMinimum([10, 5, 20, 8, 15]));
// Output: 5


// ==========================================
// 6. Sum of Array
// ==========================================

function sumArray(numbers) {
    var sum = 0;

    for (var i = 0; i < numbers.length; i++) {
        sum = sum + numbers[i];
    }

    return sum;
}

console.log(sumArray([1, 2, 3, 4, 5]));
// Output: 15


// ==========================================
// 7. Filter Array
// ==========================================

function filterArray(numbers, condition) {
    var result = [];

    for (var i = 0; i < numbers.length; i++) {
        if (condition(numbers[i])) {
            result[result.length] = numbers[i];
        }
    }

    return result;
}


// Example: keep numbers greater than 10
function greaterThanTen(number) {
    return number > 10;
}

var numbers = [5, 12, 8, 20, 3, 15];

console.log(filterArray(numbers, greaterThanTen));
// Output: [12, 20, 15]


// ==========================================
// MATHEMATICAL FUNCTIONS
// ==========================================

// 8. Factorial
function factorial(n) {

    if (n < 0) {
        return "Factorial is not defined for negative numbers";
    }

    var result = 1;

    for (var i = 1; i <= n; i++) {
        result = result * i;
    }

    return result;
}

console.log(factorial(5));
// Output: 120


// ==========================================
// 9. Prime Number Check
// ==========================================

function isPrime(number) {

    if (number < 2) {
        return false;
    }

    for (var i = 2; i < number; i++) {

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


// ==========================================
// 10. Fibonacci Sequence
// ==========================================

function fibonacci(n) {

    var sequence = [];

    var a = 0;
    var b = 1;

    for (var i = 0; i < n; i++) {

        sequence[sequence.length] = a;

        var next = a + b;

        a = b;
        b = next;
    }

    return sequence;
}

console.log(fibonacci(10));
// Output: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
