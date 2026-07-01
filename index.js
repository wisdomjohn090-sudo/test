// // printing out the console
// // console.log("hello world");
// // console.log(123450);

// // variables
// // let
// // let variable declaration
// // let name;
// // variable initialization
// // name="John wisdom";
// // console.log(name);
// // variable reinitialization
// // name="Darlington";
// // console.log(name);
// // variable declaration and initialization
// // let age=30;
// // console.log(age);

// // var
// // var x=20;
// // console.log(x);
// // x=25;
// // console.log(x);
// // var x =50;
// // console.log(x);

// // cont
// // const a= "Espendi";
// // console.log(a);

// let val;
// // Datatypes
// // string
// // val ="prime";
// // console.log(val);
// // Numbers
// // val = 100;
// // console.log(val);
// // Bollean
// // val = false;
// // console.log(val);
// // null
// // val = null;
// // console.log(val);


// // operators
// // assignment operator

// // let b = 10;
// // let c = 5;
// // b += c; // b = b + c
// // console.log(b)

// // arithmetic operators

// // let num1; let num2;
// // num1 = 20;
// // num2 = 10;
// // val = num1 + num2;
// // console.log(val);

// // comparison operators

// // , ==, ==!, !=, >, <, >=, <=

//     // logical operators

// // &&, ||, !

// // string operators
// const firstName = "john";
// const LastName = "Doe";
// const age = 30;

// // Concatenation
// val = "my name is " + firstName + " " + LastName + " and I am " + age + " years old.";
// console.log(val)

// // append
// val = "femi";
// val += " Ben";
// console.log(val)

// // Length

// val = firstName.length;
// console.log(val)


// // changing cases

//  val = firstName.toUpperCase();
//  console.log(val);
//  val = firstName.toLowerCase();
//  console.log(val);

// //  Index

// val = firstName[0];
// // val = LastName[2]
// // val = LastName.length;
// console.log(val)

// // substring

// val = firstName.substring(0, 2);
// console.log(val);

// // Index of

// let email = "femiben@gmaill.com";
// val = email.indexOf("@");
// console.log(val);

// // Replace
// val = email.replace("gmail","outlook");
// console.log(val)

// // Conditional Statements 
// if, else if, else
//     const id = "100";
// // Equal to
// if (id === 100) {
//     console.log("Correct");
// } else {
//     console.log("Incorrect");
// }

// // Not equal to 
// if (id != 100) {
//     console.log("Correct");
// } else {
//     console.log("Incorrect");
// }

// // Equal to value and type
// if (id === 100) {
//     console.log("They are equal");
// } else {
//     console.log("Not a match");
// }

// // Not equal value and type
// if (id !== 100) {
//     console.log("They are not equal");
// } else {
//     console.log("They are equal")
// }

// >= ---- Greatr than or equal to 
// > ----- Greater than
// < ----- less than 
// <= ----- less than or equal to 
// == ---- Equal to value and type  
//||= ----- Not equal to 
// !== ----- Not equal to value and type  

// let num1 = 40; let num2 = 20;
// if (num1 >= 40) {
//     console.log("True");
// } else {
//     console.log(False);
// }

// // Logical (&&) And Operators
// if (10 > 15 && num2 < num1) {
//     console.log("True");
// } else {
//     console.log("False");
// }

// // Logical (||) OR Operators
// if (10> 15 || num2 < num1 ) {
//     console.log("True");
// } else {
//     console.log("False");
// }

// // Logical (!) Not Operators
// if (!(10 > 15)) {
//     console.log("True");
// } else {
//     console.log("False");
// }
// let num1 = 4, num2 = 20;
// if (num1 > num2) {
//     console.log("num2 is greater than num1");
// } else if (num2 == 4) {
//     console.log("num2 is equal to 4")
// } else if (num1 > num2 ||num2 >=10 ) {
//     console.log("True");
// } else {
//     console.log("num1 is greater than num2");
// }

// Loops
// While Loops - loops through a block of code while a specified condition is true
// let a = 0;
// while (a < 10) {
// console.log("Welcome" + a);
// a++;
// }

// // For lodops - Loops through a block of code a specified number of times 

// for (let i = 0; i < 10; i++) {
// console.log(i);
// }
// //  for loops - loops through a block of code a specifield number of time 
// for (let i = 10; i >=0; i--) {
//     console.log(i);
// }

// for (let i = 1; i <= 50; i += 2) {
//     console.log(i);
// }

// for (let i = 0; i <= 50; i++) {
//     if (i % 2 == 0) {
//         console.log(i);
//     }
// }

// Arrays

// let students = ["Almajiri", "Cj", "Prime", "TK", "Prada", "Chris", 20, 50, 90 ];

// // Operations on arrays

// // Get elements of an array 
// console.log(students [0]);
// console.log(students [1]);
// console.log(students [6]);
// console.log(students[7]);

// // changing the elements of an array 
// students[7] = "Awesome";
// console.log(students[7]);

// // length of an array 
// console.log(students.length);

// // Adding element to an array 
// students.push("Dennis");
// students.unshift("Dominic");
// console.log(students)

// Removing elements for an array 
// students.pop();
// students.shift();
// console.log(students);

// students.splice(2,1);
// console.log(students)

// // loop through an array 
// for (let i = 0; i < students.length; i++) {
//     console.log(students[i]);
// }

// // for each loop 
// students.forEach(function (student) {
//     console.log(student)
// })

// // functions
// function greet() {
//     console.log("Welcome to JavaScript");
// }
// // greeting();
// function addNum() {
//     let num1 = 40;
//     let num2 = 20;
//     let sum = num1 + num2;
//     console.log(sum);
// }
// addNum();
// function addNum(num1, num2) {
//     let sum = num1 + num2;
//     console.log(sum);
// }
// let cj = addNum(40, 20);
// console.log(cj);
// addNum(100, 50);

// function addNum(num1, num2) {
//     let sum = num1 + num2;
//     return sum;
// }

// console.log(addNum(100, 29));
// let result = addNum(50, 20);
// console.log(result);

// alert
// alert("Welcome to JavaScript");
// alert("12345");

// 

// Dom manipulation

// selectors
// single element selector
// getElementById
// let check = document.getElementById("demo");
// // console.log(check);
// check.style.color.fontsize = "50px";
// check.style.color = "red";
// check.style.backgroundColor = "yellow";
// document.getElementById("demo").style.textAlign = "center";

// // QuerySelector
// let check2 = document.querySelector("#demo");
// // console.log(check2);
// check2.style.color.fontsize = "50px";
// check2.style.color = "red";
// check2.style.backgroundColor = "yellow";
// document.querySelector("#demo").style.textAlign = "center";

// Multiple Element Selectors
// getElementsByClassName
// getElementsByTagName

// let number = document.getElementsByTagName("h2");
// console.log(number);
// // number[0].style.color = "red";
// number[2].style.fontSize = "50px";

// for (let i = 0; i < number.length; i++) {
//     number[i].style.color = "blue";
//     number[i].style.textAlign = "center";
// }

// Array.from(number).forEach(function (a) {
//     a.style.color = "green";
//     a.style.textAlign = "right";
// });

// let number = document.getElementsByClassName("number");
// console.log(number);

let number = document.querySelectorAll("#demo");
console.log(number);

number.forEach(function (cj) {
    cj.style.color = "green";
    cj.style.textAlign = "center";
    cj.style.background = "black";
})