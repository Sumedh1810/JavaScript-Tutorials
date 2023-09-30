/*let welcome = function(){
    console.log("WELCOME");
};
welcome();*/
//----------------ARROW FUNCTIONS---------------------------
/*let intro = () => {
    console.log("WELCOME ARROW")
};
intro();*/

/*let welcome = (name) => {
    //console.log(`WELCOME ${name}`);
    return `WELCOME ${name}`;
};
//console.log(welcome);
console.log(welcome("Sumedh"));*/

let welcome = (name) => `WELCOME ${name}`; //if and only if one parameter then we write welcome = name => `WELCOME ${name}`
console.log(welcome("Sumedh"));