const addProduct = document.querySelector("ul");
const button = document.querySelector("button");

button.addEventListener("click", () => {
    const li = document.createElement("li");
    li.textContent = "New Product";
    addProduct.append(li);
});

addProduct.addEventListener("click", (event) => {
    //console.log(event.target); // identifies where we clicked, li or in ul(between elements)
    //console.log(event);  to check the tagName
    if(event.target.tagName === "LI"){
        event.target.remove();
    }
});
 /* This method is efficient because we access directly the parent of li i.e ul unlike in 
 Events folder where we accessed individual li elements so we can now edit newly added 
 Products also.
  */

 /*Event Bubbling i.e if li also has an event attached and if we press li then first
 eventLisetner of li will be called then eventListener of ul will be called.
 To stop this chaining we use event.stopPropagation() to stop the chain-reaction
 */