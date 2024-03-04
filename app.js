// Define an array of friends' names
var names = ["Ambitab", "Amir", "Sharukh", "Salman"];
// Function to print personalized messages to each friend
function printPersonalizedMessages(names) {
    names.forEach(function (name) {
        console.log("Hello ".concat(name, ", I hope you're having a great day!"));
    });
}
// Call the function to print personalized messages
printPersonalizedMessages(names);
