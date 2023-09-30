/**
 Original way to create Key Value Pair in JS
 const value = {
    "name": "sumedh",
    "age": 21
 };
 */

//This way of creating key-value pair is similar to json
/*localStorage.setItem("name", "sumedh");
localStorage.setItem("age", 21);

const name = localStorage.getItem("name");
const age = localStorage.getItem("age");

console.log(name, age);
console.log(typeof name, typeof age); // in local storage all parameters are stored as strings.

// even of we delete this code and relaunch the browser and use 
// localStorage.getItem("name");  we fetch the name sumedh.

/* Remove Items
localStorage.removeItem("name");
localStorage.removeItem("age");*/

/*Updating Values
localStorage.age = 22;
localStorage.setItem("age", 27);
*/

//To Clear
//localStorage.clear();

