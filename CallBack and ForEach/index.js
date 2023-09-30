//-----------------------CALLBACK FUNCTIONS----------------
/*let add = function(a,b){
    return a+b;
}
let sub = function(a,b){
    return a-b;
}

let mul = function(a,b){
    return a*b;
}

let div = function(a,b){
    return a/b;
}

function calculator(num1, num2, add, sub){
    let addResult = add(num1,num2);
    let subResult = sub(num1,num2);
    let mulResult = mul(num1,num2);
    let divResult = div(num1,num2);
    //let result = `ADD: ${addResult}, MUL: ${subResult}`;
    //console.log(result);
    //return result;
    return `ADD: ${addResult}, SUB: ${subResult}, MUL: ${mulResult}, DIV: ${divResult}`;
}
console.log(calculator(10,5,add,sub));*/

//------------------FOR EACH------------------------

let products = ["bread", "butter", "jam","bottle"];

/*let callback = (product) => console.log(`My product name is ${product}`);
products.forEach(callback);*/

products.forEach((product) => {console.log(product)});