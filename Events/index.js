/*const productAdd = document.querySelector("button");
productAdd.addEventListener("click", () => {
    //productAdd.setAttribute("style", "display:none");
    console.log("Button Clicked");
});*/
//"click" means type of actions and () => {} means a callbackfunction

/*const product = document.querySelectorAll("li");
product.forEach(product => {
    product.addEventListener("click", (event) => {
       // console.log(event);  gives details about the clicked li element
       event.target.style.textDecoration = "line-through"
       console.log(event.target.textContent); //gives the contents of the li
    })
});*/

const product = document.querySelectorAll("li");
product.forEach(product => {
    product.addEventListener("click", (event) => {
       event.target.remove();
       console.log(event.target.textContent);
    })
});
/*const addProduct = document.querySelector("ul");
const button = document.querySelector("button");
button.addEventListener("click", ()=> {
    addProduct.innerHTML += "<li>NewProduct</li>" // add at bottom
    //addProduct.innerHTML = "<li>NewProduct</li>" + addProduct.innerHTML; // add at top
    console.log(addProduct.innerHTML);
});*/
 // this method is not efficient because we add entire new HTML so previous click to remove 
 //cannot be used i.e only one event listner at a time.

 //Now we use append method

const addProduct = document.querySelector("ul");
const button = document.querySelector("button");
button.addEventListener("click", ()=> {
    const newLi = document.createElement("li");
    newLi.innerText = "New Product";
    addProduct.append(newLi);
    //addProduct.prepend(newLi);
    console.log(addProduct.innerHTML);
}); // now we can only remove old elements bread,butter,water not the new products.












