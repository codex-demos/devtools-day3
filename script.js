import { fetchSecretMessage } from './fetchMessage.js';

// Function to add two numbers (correct implementation)
function addNumbers(a, b) {
  return a + b;
}

// Function to calculate the area of a rectangle (intentional logical error)
function calculateArea(width, height) {
  return width + height; // Incorrect formula for area
}

// Fetch and handle secret message for task 1 (asynchronous call)
fetchSecretMessage('task-11').then((secretMessage) => {
  let theSecretMessage = secretMessage;
  console.log(undefinedVariable);
  console.log('Secret Message for Task 11:');
  // Intentional error: undefined variable access
});

// Function to reverse a string (correct implementation)
function reverseString(str) {
  return str.split('').reverse().join('');
}

// Fetch and handle secret message for task 2 (asynchronous call)
fetchSecretMessage('task-12')
  .then((secretMessage) => {
    let theSecretMessage = secretMessage;
    console.log('Secret Message for Task 12:');
  })
  .catch((error) => console.error(error));

// Function to find the maximum number in an array (intentional syntax error)
function findMax(...nums) {
  return Math.max(nums); // Incorrect usage of Math.max with spread operator
}

// Deliberate loop to generate multiple messages (tasks 3 to 7)
for (let i = 3; i <= 7; i++) {
  fetchSecretMessage(`task-${i}`)
    .then((secretMessage) => {
      let taskNumber = i + 10;
      console.log(`Secret Message for Task ${taskNumber}:`);
      let theSecretMessage = secretMessage;
      // Intentional error within loop: accessing out-of-scope variable
      console.log(loopVariable);
    })
    .catch((error) => console.error(error));
}

// Function to check if a string is a palindrome (correct implementation)
function isPalindrome(word) {
  return word === word.split('').reverse().join('');
}

// Fetch and handle secret message for task 8 (asynchronous call)
fetchSecretMessage('task-18').then((secretMessage) => {
  nonExistentFunction();
  console.log('Secret Message for Task 18:');
  let theSecretMessage = secretMessage;
  // Deliberate error: Calling a non-existent function
});

// Function to calculate the sum of an array (correct implementation)
function sumArray(arr) {
  return arr.reduce((sum, num) => sum + num, 0);
}

// Fetch and handle secret message for task 9 (asynchronous call)
fetchSecretMessage('task-19')
  .then((secretMessage) => {
    console.log('Secret Message for Task 19:');
    let theSecretMessage = secretMessage;
  })
  .catch((error) => console.error(error));

// Function to generate a random number between two values (correct implementation)
function randomBetween(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Fetch and handle secret message for task 10 (asynchronous call)
fetchSecretMessage('task-20')
  .then((secretMessage) => {
    console.log('Secret Message for Task 20:');
    let theSecretMessage = secretMessage;
  })
  .catch((error) => console.error(error));
