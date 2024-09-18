// // CHAPTER 10 

// Q1
// var city = "karachi";
// if (city == "karachi ") {
//     console.log("the city of lights")
// }

// // Q2

// if (x === y) {
//     var z = prompt("what is the value of Z?");
//     console.log("the value of z "+ z);
// }

// // Q3 
var zipcode = "10010";
if (zipcode = "10010"){
    alert('karachi')
}
else{
    alert('please write correct city');

}

// // Q4 

// var x = 1 ;
// if (x===1){
//     x=4;
// }
// console.log(x);


// // CHAPTER 11 


// // Q1 

// if (X!==y){

// }

// // Q2

// if (x>=y){

// }

// // Q3 
// let num1 = 5;
// let num2 = 10;

// if (num1 !== num2) {
//   alert("Congratulations! The numbers are not equal.");
// }


// // Q4 
// let firstName = prompt("Please enter your first name:");

// if (firstName !== "John") {  // Replace "John" with the name you're comparing to
//   alert("No match");
// }



// // CHAPTER 12 


// // Q1 
// let x = 10;
// let y = 7;

// if (x >= y) {

//   alert("x is greater than or equal to y");

// } else {
//   alert("x is less than y");
// }

// //Q2

// // Prompt the user for their marks
// let marks = parseFloat(prompt("Enter your marks (out of 100):"));

// // Calculate the percentage
// let percentage = marks;

// // Determine the grade based on the percentage
// if (percentage >= 90) {
//   alert("Grade: A");
// } else if (percentage >= 80) {
//   alert("Grade: B");
// } else if (percentage >= 70) {
//   alert("Grade: C");
// } else if (percentage >= 60) {
//   alert("Grade: D");
// } else {
//   alert("Grade: F");
// }



// // Q3 

// let a = 7;  // You can set this to any value to test

// if (a === 10) {
//   alert("a is 10");
// } else {
//   alert("The correct value of a is " + a);
// }
// // Q4 


// let x = 5;  // Example initial value

// if (x !== 10) {  // Replace 10 with the number you're testing against
//   x = 20;  // Assign a new number if the condition is true
// }

// console.log(x);  // Output the new value of x

// // Q5 

// // Prompt the user for marks
// let marks = parseFloat(prompt("Enter your marks (out of 100):"));

// // Check if the entered marks are valid
// if (isNaN(marks) || marks < 0 || marks > 100) {
//   alert("Please enter a valid number between 0 and 100.");
// } else {
//   // Calculate the percentage (assuming marks are out of 100)
//   let percentage = marks;

//   // Determine the grade based on the percentage
//   if (percentage >= 90) {
//     alert("Grade: A");
//   } else if (percentage >= 80) {
//     alert("Grade: B");
//   } else if (percentage >= 70) {
//     alert("Grade: C");
//   } else if (percentage >= 60) {
//     alert("Grade: D");
//   } else {
//     alert("Grade: F");
//   }
// }

// //  CHAPTER 13
// // Q1 

// let a = 7;  // You can set this to any value to test

// if (a === 10) {
//   alert("a is 10");
// } else {
//   alert("The correct value of a is " + a);
// }


// // Q 2


// let city = "Karachi";  // You can set this to any city to test

// if (city === "Karachi") {
//   alert("It is Karachi.");
// } else if (city === "Lahore") {
//   alert("It is Lahore.");
// } else {
//   alert("It is neither Karachi nor Lahore.");
// }




// // Q3 



// if ((name === "Hamza" || name === "Arsalan") && age < 60) {

//     // Q4

//     let firstNumber = 5;  // Assign a numeric value
//     let secondNumber = 10; // Assign a numeric value
    
//     if (firstNumber < secondNumber || firstNumber > secondNumber) {
//       alert("The first number is either less than or greater than the second number.");
//     }
    
// // Q5


// // Declare variables and assign them your first and last names
// let myFirstName = "John";  // Replace "John" with your actual first name
// let myLastName = "Doe";    // Replace "Doe" with your actual last name

// // Prompt the user for their first and last names
// let userFirstName = prompt("Please enter your first name:");
// let userLastName = prompt("Please enter your last name:");

// // Check if the user's answers match the stored variables
// if (userFirstName === myFirstName && userLastName === myLastName) {
//   alert("Your name matches!");
// }


// // CHAPTER 14 
// // Q1

// // Assume password is obtained from a prompt or other input
// let password = prompt("Enter your password:");

// // Check if the password is not empty
// if (password !== "") {
//   // Nested if to check if the password length is greater than 5
//   if (password.length <= 5) {
//     alert("Password must be greater than 5");
//   } else {
//     alert("OK");
//   }
// } else {
//   alert("Password cannot be empty");
// }




// // Q2


// let a = 1;         // Example value for a
// let c = "Max";     // Example value for c

// if (a === 1) {         // First condition
//   if (c === "Max") {   // Nested condition
//     alert("OK");       // Alert if both conditions are met
//   }
// }




// // Q3 



// let a = 1;       // Example value for a
// let c = "Max";   // Example value for c

// if (a === 1 && c === "Max") {
//   alert("OK");
// }


// // Q4 
// let first_Number = 10;  // Assign the same number value to both variables
// let second_Number = 10; // Assign the same number value to both variables

// if (first_Number === second_Number) {  // Check if the first variable equals the second
//   if (first_Number <= second_Number) {  // Nested condition: check if it is less than or equal to the second variable
//     alert("The test passes: first_Number is equal to and less than or equal to secondNumber.");
//   }
// }
