// reach an element
/*let description = document.querySelector('p');
console.log(description);*/

//when query selector is used only 1st element access is available
// for class -> document.querySelector('.class-name')
// for id -> document.querySelector('#id')

let description = document.querySelectorAll('div p'); // css selectors are used to select specific elements
console.log(description);
description.forEach(paragraph => console.log(paragraph));

let selector = document.getElementById("website-name");
let selectorclass = document.getElementsByClassName("active");
console.log(selectorclass);
//console.log(selectorclass.forEach()); // for each method cannot be used for html collection

// so query selector is better so we can get the required element easily