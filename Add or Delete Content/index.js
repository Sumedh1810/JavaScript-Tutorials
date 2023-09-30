// Editing text
/*let subHeading = document.querySelector(".blog-subheading");
console.log(subHeading);
subHeading.innerHTML = "Updated sub-heading";*/

/*let liHead = document.querySelectorAll("ul.top-nav li");
liHead.forEach((element) => {
    console.log(element.innerText);
    element.innerText += "--";
});*/ // used to select multiple items together for editing

// Editing HTML
let subHeading = document.querySelector(".blog-subheading");
subHeading.innerHTML = "<h5>------------------------</h5>";

let liHead = document.querySelector("ul.top-nav");
liHead.innerHTML += "<li>Register</li>"; // adding a new element to old list