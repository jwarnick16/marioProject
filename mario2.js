/* Name: Justine
Date: 9/14/2024
Program: Mario Project 2
Description: Display the pyramid on the webpage
*/

userResponse = prompt("How many bricks tall should the pyramid be?");
printPyramid(userResponse);

function printPyramid(height) {
    let container = document.getElementById("pyramid"); // Finds container with ID of "pyramid"
    container.innerHTML = ""; // Tells function to override whatever is in the pyramid <div>
    let n = userResponse; // Takes in user input as height parameter
    for (let i = 1; i <= n; i++) { // Outer loop
        let rowStr = ""; // Creates an empty string for each row
        for (let j = 0; j < n - i; j++) { // First inner loop to replace blank spaces with periods so they will not be ignored by HTML
            rowStr += "."; // Adds periods to blank spaces
        }
        for (let k = - 1; k < i; k++) { // Second inner loop, places hashes as bricks based on user input
            rowStr += "#"; // Assigning hashes as bricks
        }
        container.innerHTML += rowStr + "<br>"; // Creates breaks between each row so pyramid appears stacked
    }
}

