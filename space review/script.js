//Arrays

//Create and array of numbers. Sum all of the numbers. Alert the sum.

let sumOfNumbers = ["10", 5, 5, 10, 30, 70]

//* create a var for the sum and intialized it
// let sum = 0;
// 2nd method
let sum = sumOfNumbers.reduce((acc, c) => acc + Number(c), 0) // it number will change the string to number

// here my acculamtution start with 0
// reduce will run once for each element in an array fro every time when reduce run you will get two value 
// ? the first value called accumalator and the 2nd value is what ever the current value is and our acc for accalmotor and c for current value
//* iterate over each item in the array

// for (let i = 0; i < sumOfNumbers.length; i++) {
//     sum += sumOfNumbers[i];
// }

alert(sum)

//Create a function that takes in an array of numbers
//Return a new array of numbers that is every original number squared
function arrayNums(arr) {

}



//Create a function that takes string
//Print the reverse of that string to the console




//Create a function that takes in a string
//Alert if the string is a palindrome or not
