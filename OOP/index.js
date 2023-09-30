class User {
    constructor(username, age) {
        this.username = username;
        this.age = age;
        this.active = false;
    }
    login(){
        this.active = true;
        //console.log(`Welcome ${this.username} - ${this.active}`);
        return this;
    }
    logout(){
        this.active = false;
        //console.log(`Logged out ${this.username} -${this.active}`);
        return this;
    }
    display(){
        if(this.active){
            console.log(`Username: ${this.username}, Age: ${this.age}`);
        } else{
            console.log("PLEASE LOGIN")
        }
        
    }
}

/*const user1 = new User("sumedh", 21);
// console.log(user1.login());
// console.log(user1.logout());
user1.login().display();*/

//inheritance

class Student extends User{
    constructor(username, age, semester, rank){
        super(username, age);
        this.semester = semester;
        this.rank = rank;
    }
}
    const stud1 = new Student("ABC", 20, 7, "A");
    stud1.login().display();

