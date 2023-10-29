// Define the size of the triangle
const size = 5;

// Loop through each row of the triangle
for (let i = 1; i <= size; i++) {
    // Create a string to represent the current row
    let row = '';

    // Add spaces to the beginning of the row to center the triangle
    for (let j = 1; j <= size - i; j++) {
        row += ' ';
    }

    // Add asterisks to the row to create the triangle
    for (let k = 1; k <= i; k++) {
        row += '* ';
    }

    // Log the row to the console
    console.log(row);
}

console.log("Namaste!")
console.log("Let's Go!")