/* Name: Justine
Date: 9/13/2024
Program: Mario Project 1
Description: Take in user input for how many bricks tall the pyramid should be and then build the pyramid in the console
*/

userResponse = prompt("How many bricks tall should the pyramid be?"); // asks user for pyramid height
printPyramid(userResponse); // inputs response to print pyramid function


function printPyramid(height) {
    let n = userResponse; // converts user response into variable n
    let string = ""; // assigning an empty character value to the variable string
    for (let i = 1; i <= n - 1; i++) { // starts first loop
        for (let j = 0; j < n - i; j++) { // starts first inner loop
            string += " "; 
        }
        for (let k = - 1; k < i; k++) { // starts second inner loop
            string += "#";
        }
        string += "\n"; // puts each string of characters on a new line
    }
    console.log(string); // prints out pyramid
}
