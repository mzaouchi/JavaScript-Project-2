# JavaScript Functions Exercise

## 📌 Description

This project contains a collection of JavaScript functions designed to practice **strings, arrays, loops, conditions, and mathematical operations**.

The goal is to develop a strong understanding of JavaScript fundamentals by solving common programming problems **without using predefined array and string methods**.

All functions are implemented using basic JavaScript concepts such as **variables, functions, loops, conditions, indexes, and operators**.

## 🎯 Objectives

By completing this exercise, you will practice:

* Creating and using functions
* Working with strings
* Working with arrays
* Accessing elements using indexes
* Using `for` loops
* Using conditional statements
* Using arithmetic operators
* Using comparison operators
* Using the modulo operator `%`
* Building basic algorithms
* Solving problems without predefined methods

## 📂 Functions Implemented

### 1. String Manipulation

#### Reverse a String

Reverses a string using a `for` loop and string indexes.

```javascript
reverseString("Hello");
// "olleH"
```

#### Count Characters

Counts the number of characters in a string.

```javascript
countCharacters("Hello World");
// 11
```

#### Capitalize Words

Capitalizes the first letter of each word using loops and conditions.

```javascript
capitalizeWords("hello world javascript");
// "Hello World Javascript"
```

### 2. Array Functions

#### Find Maximum

Finds the largest number in an array using a `for` loop.

```javascript
findMaximum([10, 5, 20, 8]);
// 20
```

#### Find Minimum

Finds the smallest number in an array using a `for` loop.

```javascript
findMinimum([10, 5, 20, 8]);
// 5
```

#### Sum of Array

Calculates the sum of all elements using a `for` loop.

```javascript
sumArray([1, 2, 3, 4, 5]);
// 15
```

#### Filter Array

Creates a new array containing only the numbers that satisfy a condition.

```javascript
filterArray([5, 12, 8, 20], greaterThanTen);
// [12, 20]
```

The function is implemented using a `for` loop instead of the predefined `filter()` method.

### 3. Mathematical Functions

#### Factorial

Calculates the factorial of a number using a `for` loop.

```javascript
factorial(5);
// 120
```

#### Prime Number Check

Checks whether a number is prime using a loop and the modulo operator `%`.

```javascript
isPrime(7);
// true
```

```javascript
isPrime(10);
// false
```

#### Fibonacci Sequence

Generates a Fibonacci sequence using variables, a loop, and basic arithmetic.

```javascript
fibonacci(10);
// [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
```

## 🛠️ Technologies

* JavaScript
* Node.js
* Git
* GitHub

## 🚀 How to Run

### 1. Clone the repository

```bash
git clone <repository-url>
```

### 2. Navigate to the project folder

```bash
cd <project-folder>
```

### 3. Run the JavaScript file

```bash
node script.js
```

The results will be displayed in the terminal.

## 📚 Concepts Practiced

### Functions

* Function declaration
* Parameters
* Arguments
* Return values
* Calling functions

### Strings

* String indexes
* String length
* Accessing characters
* Building strings using concatenation
* String traversal with loops

### Arrays

* Creating arrays
* Array indexes
* Accessing array elements
* Creating new arrays
* Array traversal with loops

### Loops

* `for` loops
* Loop counters
* Nested logic
* Iterating through strings
* Iterating through arrays

### Conditions

* `if`
* `else`
* Comparison operators
* Boolean values

### Operators

* `+`
* `-`
* `*`
* `/`
* `%`
* `>`
* `<`
* `===`

### Algorithms

* Reversing a string
* Counting characters
* Capitalizing words
* Finding maximum values
* Finding minimum values
* Calculating an array sum
* Filtering values manually
* Calculating factorials
* Checking prime numbers
* Generating Fibonacci sequences

## 🚫 No Predefined Methods

This project intentionally avoids predefined methods and modern shortcuts.

The following are **not used**:

* `map()`
* `filter()`
* `reduce()`
* `forEach()`
* `push()`
* `pop()`
* `shift()`
* `unshift()`
* `split()`
* `join()`
* `reverse()`
* `Math.max()`
* `Math.min()`
* Spread operator `...`
* Arrow functions `=>`
* `let`
* `const`

The solutions rely only on **basic JavaScript syntax, loops, conditions, indexes, variables, and operators**.

## 👨‍💻 Author

**Mahmoud Zaouchi**
