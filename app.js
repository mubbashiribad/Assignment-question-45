// lower case
var personName = "Ibad";
console.log("lowercase;", personName.toLowerCase());
// uper case
console.log("uppercase:", personName.toLocaleUpperCase());
// Title case
console.log("titlecase:", personName.replace(/\bw/g, function (c) { return c.toUpperCase(); }));
