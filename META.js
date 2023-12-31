// // Declaring variables

// // var petDog = "Rex";
// // var petCat = "Pepper";
// // console.log(petDog);
// // console.log(petCat);
// // console.log("My pet dog's name is:", petDog)
// // console.log("My pet cat's name is:", petCat)

// // Task 1: Using the logical && operator
// //     You are coding an RPG game, where each character has certain skill levels based on the value saved in their score.
// //     Create a variable named  score and set it to  8
// //     Use console.log() that includes the string "Mid-level skills:" and compares the score variable to above 0 and below 10 using the && operator
// //     The expected output in the console should be: "Mid-level skills: true".

// var score = 8;
// console.log("Mid-level skills:", score > 0 && score < 10)


// // Task 2: Using the logical || operator
// //     Imagine you are coding a video game. Currently, you’re about to code some snippets related to the game over condition. 
// //     You need to code a new variable named timeRemaining and set it to 0. You also need to code a new variable named energy and set it to 10. 
// //     Next, you should write a piece of code that could be used to determine if the game is over, based on whether either the value of the timeRemaining variable is 0 or the value of the energy variable is 0.
// //     Complete the task using the following steps:
// //         Declare the variable timeRemaining, and assign the value of 0 to it.
// //         Declare the variable energy, and assign the value of 10 to it.
// //         Console log the following parameters: "Game over: ", and timeRemaining == 0 || energy == 0
// //         Note that the expected output in the console should be: "Game over: true".

// var timeRemaining = 0;
// var energy = 10;
// console.log("Game over:", timeRemaining == 0 || energy == 0);


// // Task 3: Using the modulus operator, %, to test if a given number is odd
// //         You need to code a small program that takes a number and determines if it's an even number (like 2, 4, 6, 8, 10).
// //         To achieve this task, you need to declare six variables, as follows:
// //         The first variable, named num1,  should be assigned a number value of 2.
// //         The second variable, named num2, should be assigned a number value of 5.
// //         The third variable, named test1, should be assigned the calculation of num1 % 2. Note: executing this code will return a number.
// //         The fourth variable, named test2, should be assigned the calculation of num2 % 2. Note: executing this code will also return a number.
// //         The fifth variable, named result1, should be assigned the result of comparing if the number stored in the test1 variable is not equal to 0, in other words, this: test1 == 0.
// //         The sixth variable, named result2, should be assigned the result of comparing if the number stored in the test2 variable is not equal to 0, in other words, test2 == 0.
// //         Run console log two times after you've set the variables:
// //              The first console log should have the following code between parentheses: "Is", num1, "an even number?", result1
// //              The second console log should have the following code between parentheses: "Is", num2, "an even number?", result2
// //         Note: The output to the console should be as follows:
// //             Is 2 an even number? true
// //             Is 5 an even number? false

// var num1 = 2;
// var num2 = 5;
// var test1 = num1 % 2;
// var test2 = num2 % 2;
// var result1 = test1 == 0;
// var result2 = test2 == 0;
// console.log("Is", num1, "an even number?", result1);
// console.log("Is", num2, "an even number?", result2);

// // task - Are you old enough?
// var age = 10;
// if (age >= 65) {
//    console.log('You get your income from your pension')
// } else if (age < 65 && age >= 18) {
//    console.log('Each month you get a salary')
// } else if (age < 18) {
//    console.log('You get an allowance')
// } else {
//    //this block will run if no condition matches
//    console.log('The value of the age variable is not numerical')
// }

// // Days of the Week program
// var day = `Sunday`;
// switch(day) {
//    case 'Monday':
//        console.log('Read a book');
//        break;
//    case 'Tuesday':
//        console.log('Watch a movie');
//        break;
//    case 'Wednesday':
//        console.log('Read a book');
//        break;
//    case 'Thursday':
//        console.log('Play basketball');
//        break;
//    case 'Friday':
//        console.log('Socialize');
//        break;
//    case 'Saturday':
//        console.log('Chill');
//        break;
//    case 'Sunday':
//        console.log('Have barbecue');
//        break;
//    default:
//        //this block will run if no condition matches
//        console.log('There is no such day');
// }

// // Working with conditionals and loops - IF else 
// for (var i = 1; i <= 10; i++) {
//     if(i == 1) {
//         console.log("Gold medal")
//     } else if (i == 2) {
//         console.log("Silver medal")
//     } else if (i == 3) {
//         console.log("Bronze medal")
//     } else {
//         //this block will run if no condition matches
//         console.log(i)
//     }
// }

// Working with conditionals and loops - Switch Case
for (var i = 1; i <= 10; i++) {
    switch(i) {
        case 1:
            console.log("Gold medal")
            break
        case 2:
            console.log("Silver medal")
            break
        case 3:
            console.log("Bronze medal")
            break
        default:
            //this block will run if no condition matches
            console.log(i)
    }
}



