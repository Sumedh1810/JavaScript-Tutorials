// let password = "Sumedh@1810";

// if(password.length >= 12 || password.length >= 8 &&password.includes("@")){
//     console.log("STRONG");
// } else if(password.length >= 5 && password.length <= 8){
//     console.log("MEDIUM");
// } else {
//     console.log("WEAK");
// }

// console.log(!true);
// console.log(!false);

// let loggedIn = true;
// if(loggedIn){
//     console.log("Hello");
// } else if(!loggedIn) {
//     console.log("Please log in.");
// } 

// ------------------TERNARY OPERSTORS-----------------
/*const result = 10 > 2;

if(result){
    console.log("True");
} else{
    console.log("False");
}*/

/*const user = true;
user ? console.log("true value") : console.log("false value");*/

const username = "sumedh";

username.length >= 5 ? (console.log("above 5")) : console.log("below 5");

const result = username.length >= 5? username.length : 0;
console.log(result);