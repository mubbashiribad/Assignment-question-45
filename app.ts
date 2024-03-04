// Define an array of favorite modes of transportation
let transportation: string[] = ["car", "motorcycle", "bicycle", "train"];

// Function to print statements about the items in the list
function printTransportationStatements(transportation: string[]): void {
    transportation.forEach(item => {
        console.log(`I would like to own a ${item}.`);
    });
}

// Call the function to print statements
printTransportationStatements(transportation);
