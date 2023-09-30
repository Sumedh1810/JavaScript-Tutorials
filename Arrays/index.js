/*let items = ["bread", "butter", "jam", 15];
//console.log(items);
// declare array name as plural
console.log(items[0]);
items[0]="pizza";
console.log(items);

// We cannot override individual elements in string but in arrays we can do that

console.log(items.length);

console.log(items.join(","))
console.log(items.indexOf("jam"));

let items2 = ["sugar", "salt"];
console.log(items.concat(items2));
console.log(items2.concat(items));


items.push("peanuts");
console.log(items);
items.pop();
console.log(items);*/

//------------FILTER METHOD-------------------------

/*const movies = [
    {name :"Coffee Day", rating: 9},
    {name :"The Lost Coder", ratinh: 7},
    {name :"Typical Bug", rating: 4}
];

const filteredMovies = movies.filter((movie) => {
    return movie.rating > 6;
});
console.log(filteredMovies);*/

//----------------------MAP METHOD-----------------
// make changes to objects and return them
/*const number = [10,20,30,40,50];
const mapNumbers = number.map((num) => {
    return num+5;
});
console.log(mapNumbers)*/

/*const products = [
    {name: "Bread", price: 25, tax: 0.05},
    {name: "Butter", price: 65, tax: 0.05},
    {name: "Water", price: 15, tax: 0},
    {name: "Milk", price: 35, tax: 0.18}
];

const mapProducts = products.map((product) => {
    const newPrice =  product.price + product.price*product.tax
    return {name:product.price ,price:newPrice, tax:product.tax };
});
console.log(mapProducts);*/

//---------------------REDUCE METHOD-----------------------
/*const numbers = [1, 2, 3, 4, 5];
const reduceNumbers = numbers.reduce((total, current) => {
    total+=current;
    return total;
},0);
console.log(reduceNumbers);*/

/*const numbers = [7,2, 3, 5, 9];
const reduceNumbers = numbers.reduce((total, current) => {
    total = total * current;
    return total;
}, 1);
console.log(reduceNumbers);*/

const students = [
    {name: "ABC", marks: 7},
    {name: "PQR", marks: 6},
    {name: "XYZ", marks: 7},
    {name: "ABC", marks: 9},
    {name: "PQR", marks: 10},
    {name: "XYZ", marks: 10},
    {name: "ABC", marks: 8},
    {name: "PQR", marks: 9}
];

const reduceStudents = students.reduce((total, current) => {
    if(current.name === "ABC"){
        total += current.marks;
    }
    return total;
}, 0);
console.log(reduceStudents);























