// --------------- CHILDREN-------------------------------
/*const topNav = document.querySelector(".top-nav"); 
//console.log(topNav.children);
const topNavChildren = Array.from(topNav.children); // as children recieved are collection we change to Array to use forEach.
topNavChildren.forEach(child => {
    child.classList.add("random"); // adding random class to all the list elements(children of top-nav)
    console.log(child);
});*/

//------------------------PARENT-------------------------------
/*const brandName = document.querySelector('#website-name');
console.log(brandName.parentElement);  if we add more .parentElement we get the parent of its parent till HTML.
  to find all the siblings use .parentElement.children (easy method).*/

 //---------------------SIBLINGS-------------------------
 const blogHeading = document.querySelector(".blog-subheading");
 console.log(blogHeading.nextElementSibling); // next sibling
 console.log(blogHeading.previousElementSibling);      //previous sibling