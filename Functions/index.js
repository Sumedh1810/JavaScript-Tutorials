/*console.log(add(2,5));// can use function before declaring it ,hoisting
function add(num1, num2){
    return num1 + num2;
}*/

//intro(); cannot because it is stored in a variable
/*let intro = function(){
    console.log("Function stored inside a variable");
};
intro();*/

/*js scan's the code 2 times ,1st time stores all the regular functions
so they can be used before their declaration*/

/*function welcome(name) {
    console.log(`Welcome ${name}`);
}
welcome("sumedh");*/

/*add(3,7);
function add(num1, num2){
    let result = num1 + num2;
    console.log(result);
}*/

/*function fullName(firstName, lastName=""){
    console.log(`WELCOME ${firstName} ${lastName}`);
} // if lastName is not given by user we assign it as empty string(default value).
fullName("Sumedh", "Patil");
fullName("Sumedh");*/

/*function add(num1, num2){
    let result = num1 + num2;
    return result;
}
let returnedValue=add(5, 7);
console.log(returnedValue);
console.log(add(5, 7));*/

function fullName(firstName, lastName){
    let result = firstName + " " + lastName;
    return result;
}

let value = fullName("Sumedh", "Patil");
console.log(value);
console.log(fullName("Sumedh", "Patil"));
