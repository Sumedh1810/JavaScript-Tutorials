let user = {
    name: "Sumedh Patil",
    email: "sumedh020@gmail.com",
    age: 21,
    isLoggedIn: false,
    login(nickname){
        return `LOGIN ${nickname}`;
    },
    logout: function(){
        return "LOGOUT";
    },
    emailDisplay(){
        return `EMAIL : ${this.email}`;
    }
};
/*console.log(user);
console.log(user.isLoggedIn);
user.isLoggedIn = true;
console.log(user.isLoggedIn);

user["name"] = "ABC"; // this method is used when key is given by user as user.key will be undefined so we use user["key"]
console.log(user.name);

console.log(typeof user);*/

console.log(user.login("sumedh"));
console.log(user.emailDisplay());