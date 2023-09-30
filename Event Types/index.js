/*const products = document.querySelector("ul");
const copyAlert = (event) => {
    if(event.target.tagName === "LI"){
        alert(event.target.textContent);
    } 
}
products.addEventListener('copy', copyAlert); // don't use copyAlert() because callBackFunction i.e only passing a function and its execution will be at time of event.
*/
 /*const webPage = document.querySelector("body");
 webPage.addEventListener("mousemove" ,(event) =>{
    console.log(event.clientX, event.clientY); // prints the x&y coordinates
 });
 */

 const webPage = document.querySelector("body");
 webPage.addEventListener("wheel", (event) => {
    console.log(event);
 });