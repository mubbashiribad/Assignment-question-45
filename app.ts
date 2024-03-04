// Define an array of friends' names
let names: string[] = ["Ambitab", "Amir", "Sharukh", "Salman"];

// Function to print personalized messages to each friend
function printPersonalizedMessages(names: string[]): void {
    names.forEach(name => {
        console.log(`Hello ${name}, I hope you're having a great day!`);
    });
}

// Call the function to print personalized messages
printPersonalizedMessages(names);
