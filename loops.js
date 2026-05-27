// Angela S created the numbers array, the for loop to print the numbers 1 - 5 and the while loop to print the numbers 5 - 1.
let numbers = [1, 2, 3, 4, 5];
let i = 0;

console.log("For loop:")
for (i = 0; i < 5; i++) {
    console.log(numbers[i]);
}

console.log("While loop:")
while (i > 0) {
    i--;
    console.log(numbers[i]);
}

// Khanya G created the for loop to print even numbers and the for loop to calculate the sum of the numbers array.
console.log("Even numbers:")
for (i = 0; i < 5; i++) {
    if (numbers[i] % 2 === 0) {
        console.log(numbers[i]);
    }
}

console.log("Sum of numbers array:")
let sum = 0;

for (i = 0; i < 5; i++) {
    sum += numbers[i];
}
console.log(sum);
