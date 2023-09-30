const form = document.querySelector(".feedback-form");
const p = document.querySelector("p");

const usernamePattern = /^[a-z0-9]{6,10}$/;
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

form.username.addEventListener("keyup", (event) => {
    const userResult = usernamePattern.test(event.target.value);
    //console.log(event.target.value);
    if(userResult){
        form.username.setAttribute("class", "accepted");
    } else {
        form.username.setAttribute("class", "rejected");
    }
});

form.feedback.addEventListener("keyup",(event) => {
    const feedbackResult = feedbackPattern.test(event.target.value);
    //console.log(feedbackResult);
    if(feedbackResult){
        form.feedback.setAttribute("class", "accepted");
    } else{
        form.feedback.setAttribute("class", "rejected");
    }
});