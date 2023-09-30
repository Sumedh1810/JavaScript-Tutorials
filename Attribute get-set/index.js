/*let link = document.querySelector("a");
//console.log(link);

console.log(link.getAttribute('href')); // take attribute value from html code
link.setAttribute("href","www.example.com"); // set new value for following attribute -> www.xyz.com changed to www.example.com
console.log(link.getAttribute("href"));

link.setAttribute("target","_blank"); // add new attributes
*/

// change the css
/*const activeClasses = document.querySelectorAll(".active");
activeClasses.forEach((active) => {
    console.log(active.getAttribute("class"));
    active.setAttribute("class", "highlight");
    console.log(active.getAttribute("class"));
});*/

const brandName = document.querySelector('#website-name');
brandName.setAttribute("style","color: blue") // this overrides all the previous attributes present in html code

