// Stringify javascript to json(to local storage)
// Parse json(from local storage) to javascript 

const data = [
    {username: "sumedh", age: 25},
    {username: "yash", age: 22}
];

localStorage.setItem("data", data); // this is saved as [object,Object], [object,Object]

const dataStringify = JSON.stringify(data);
localStorage.setItem("data", dataStringify); //stored as String

//const accessData = localStorage.getItem("data");
//console.log(accessData); // this is returned in the form of string

const accessData = JSON.parse(localStorage.getItem("data"));
console.log(accessData); // now it is returned as key-value pair

localStorage.clear();