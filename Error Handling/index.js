/*getWetherReport();  as function is not defined it causes an error
console.log("After exception");  this line is not getting executed.*/

/*console.log("Step 1");

function completed(){
    console.log("Weather task completed.");
}
try {
    getWetherReport();
}catch(error){
    console.log(error);
}finally{
    completed(); // The code in this block is always executed
}
console.log("Step 2"); // this line is getting executed
 */

const username = 52;
const age = 21;

if(typeof username !== "string"){
    throw Error("Not a String"); // throw is used to throw an error explicitly
}

if(age > 21){
    throw Error("Invalid Age!");
}