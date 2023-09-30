const form = document.querySelector(".feedback-form");
const p = document.querySelector("p");

//----REGULAR EXPRESSION----------------------
//TO validate the user inputs
const usernamePattern = /^[a-z0-9]{6,10}$/;  //regular expressions for validation
const feedbackPattern = /^.{20,50}$/;


form.addEventListener("submit", (event) => {
    event.preventDefault(); // after submit form refreshes itself we stop this default behaviour
    //console.log(form.username.value); // same as id in HTML & instead of accessing individual elements we
    //console.log(form.feedback.value); // access the entire form then use form.fieldname/fieldid.value to access it
    const resultName = usernamePattern.test(form.username.value);
    const resultFeedback = feedbackPattern.test(form.feedback.value);
    //console.log(resultName,resultFeedback);

    if(resultName && resultFeedback){
        console.log("SUBMITTED!!!");
        p.setAttribute("class", "success");
        p.textContent = "FeedBack Submitted Successfully !!!!!";
    }else{
        console.log("NOT SUBMITTED :(");
        p.setAttribute("class", "error")
        p.textContent = "Please Check";
    }
});




