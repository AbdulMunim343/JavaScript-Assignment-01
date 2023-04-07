//1. Write a JavaScript program that accepts two numbers in two prompts and displays the larger one in the console.
//Ans:

let firstNumber = prompt("Enter the first number:");
let secondNumber = prompt("Enter the second number:");

if (+firstNumber > +secondNumber) {
    console.log(firstNumber + " is larger than " + secondNumber);
} else if (+secondNumber > +firstNumber) {
    console.log(secondNumber + " is larger than " + firstNumber);
} else {
    console.log("Both numbers are equal.");
}



//2. Write a JavaScript conditional statement to find the sign of a number. Display an alert box with the specified sign.
//Ans:

let number = prompt("Enter a number:");

if (+number > 0) {
    alert("The sign is +");
} else if (+number < 0) {
    alert(" The sign is -");
}



//3. Write a JavaScript program that accepts five numbers in five prompts and displays the larger one in the console
//Ans:

let num1 = prompt("Enter the first number:");
let num2 = prompt("Enter the second number:");
let num3 = prompt("Enter the third number:");
let num4 = prompt("Enter the fourth number:");
let num5 = prompt("Enter the fifth number:");

let max = +num1;

if (+num2 > max) {
    max = +num2;
}

if (+num3 > max) {
    max = +num3;
}

if (+num4 > max) {
    max = +num4;
}

if (+num5 > max) {
    max = +num5;
}

console.log("The largest number is " + max);



//4. Write a JavaScript for loop that will iterate from 0 to 15. For each iteration, it will check if the current number is odd or even, and display a message to the screen.
//Ans:

for (let i = 0; i <= 15; i++) {
    if (i % 2 === 0) {
      console.log(i + " is even");
    } else {
      console.log(i + " is odd");
    }
  }

//5. Write a JavaScript program which computes the average marks of the following students Then, this average is used to determine the corresponding grade.
//Ans:

let marks = [80, 70, 90, 60, 85];
let total = 0;

for (let i = 0; i < marks.length; i++) {
    total += marks[i];
}

let average = total / marks.length;
let grade;

if (average < 60) {
    grade = "F";
} else if (average < 70) {
    grade = "D";
} else if (average < 80) {
    grade = "C";
} else if (average < 90) {
    grade = "B";
} else {
    grade = "A";
}

 console.log("The average marks is " + average.toFixed(2) + ", which corresponds to a grade of " + grade + ".");



//6. Here's a JavaScript program that will iterate over the integers from 1 to 100, and print "Fizz" for multiples of 3, "Buzz" for multiples of 5, and "FizzBuzz" for multiples of both 3 and 5.
//Ans:

for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    }
  }


//7. Write a JavaScript program to construct the following pattern, using a nested for loop.
//Ans:

for (let i = 1; i <= 5; i++) {
    let row = "";

    for (let j = 1; j <= i; j++) {
        row += "* ";
    }

    console.log(row);
}