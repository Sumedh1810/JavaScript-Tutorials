let firstName = "Sumedhm";
let lastName = "Patil";
let random = "Learning JavaScript";

console.log(firstName.toLowerCase());
console.log(lastName.toUpperCase());

console.log(firstName.indexOf("m"));
// console.log(firstName.lastIndexOf("m"));

/*console.log(firstName.replace("m" ,"z"));
console.log(firstName.replaceAll("m", "z"));
console.log(firstName);*/

console.log(random.substring(0,8));
// 8th index is not included 0-7.

console.log(random.substring(9,19));

console.log(random.slice(0,8));
console.log(random.slice(9,19));

console.log(firstName.startsWith("S"));
console.log(lastName.endsWith("l")); // both are case sensitive

console.log(random.includes("Learn"));