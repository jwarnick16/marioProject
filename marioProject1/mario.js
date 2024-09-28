/* Name: Justine
Date: 9/13/2024
Program: Mario Project 1
Description: Take in user input for how many bricks tall the pyramid should be and then build the pyramid in the console
*/

userResponse = prompt("How many bricks tall should the pyramid be?");
printPyramid(userResponse);


function printPyramid(height) {
    let n = userResponse - 1;
    let string = "";
    for (let i = 1; i <= n; i++) {
        for (let j = 0; j < n - i; j++) {
            string += " ";
        }
        for (let k = 0; k < i; k++) {
            string += "#";
        }
        string += "\n";
    }
    console.log(string);
}
