let firstName = "Sumedh";
let lastName = "Patil";
let videos = 10;
let subscribers = 5;

// let result = firstName + " " + lastName + " " + videos + " " + subscribers;
// console.log(result);

//this is confusing


//then we use backticks `` entity enclosed in ${} is considered as a above defined variable
let result = `Youtube Channel
${firstName} ${lastName} has 
${videos} Videos and ${subscribers} Subscribers`;
console.log(result);



let htmlTemplate = `<h1>${firstName} ${lastName}</h1>
<p>Videos: ${videos}</p>
<p>Subscribers: ${subscribers}</p>`;
console.log(htmlTemplate);