// Define an array of favorite modes of transportation
var transportation = ["car", "motorcycle", "bicycle", "train"];
// Function to print statements about the items in the list
function printTransportationStatements(transportation) {
    transportation.forEach(function (item) {
        console.log("I would like to own a ".concat(item, "."));
    });
}
// Call the function to print statements
printTransportationStatements(transportation);
