// Modules different js files in same project
// files can be seperated and can be imported.
//<script type="module" src="./index.js"></script> in HTML file

import{username, age, connect} from "./config.js";
console.log(username, age);
console.log(connect("Sumedh"));

//import{username as name, age, connect} from "./config.js";  we can rename the imported parameters
