/*const heading = document.querySelector("h1");
heading.classList.add("highlight"); // add new css class
heading.classList.remove("blog-heading"); // remove css

const activeClasses = document.querySelectorAll("li.active");
activeClasses.forEach(active => {
    active.classList.remove("active");
    active.classList.add("inactive");
});

activeClasses.forEach(active => {
    active.classList.remove("inactive");
    active.classList.add("active");
});*/
/* if in an html active and inactive are present simultaneously then store them in a variable
first seperately before changing them because if active and inactive are present and we change all
actives to inactive then there is NO WAY TO SELECT THE ACTIVES ANYMORE.
*/ 

//---------------TOGGLES---------------------------
const brandName = document.querySelector('#website-name');
brandName.classList.toggle("important"); // if class("important")  is already present in HTML then not applied here
