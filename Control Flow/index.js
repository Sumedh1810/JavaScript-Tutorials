// //--------------------------FOR LOOP------------------
// let students = ["sumedh", "saket", "yash", "shubham"];
// students[5]="jay";
// /*for(let i=0; i<students.length; i++){
//     console.log(students[i]);
// }*/

// for(let student of students){
//     console.log(student);
// } //when of is used we have access to direct values rather than indices so empty locations will be undefined.

// for(let index in students){
//     console.log(students[index]);
// } // when in is used we have access only to the indices so it will skip empty locations.
// //console.log("Outside loop");

// const employee = {
//     username: "sumedh",
//     age: 21
// };

// for(let key in employee){
//     console.log(employee[key]);
// } // we use in because there is no direct value but a key-value pair present

// const username = "sumedh";
// for(let character of username){
//     console.log(character);
// } // if we use in then we get 0\n1\n2\n3\n4\n5 as we only have access to indices.

// ------------------------WHILE LOOP--------------------
// let students = ["sumedh", "saket", "yash", "shubham"];
// let count=0;
// while(count < students.length){
//     console.log(students[count]);
//     count++;
// }

//--------------------------DOWHILE LOOP----------------
// let count=5;
// let students = ["sumedh", "saket", "yash", "shubham"];
// do{
//     console.log(students);
// }while(count < 5);

//--------------BREAK & CONTINUE-----------------------
let ratings = [7, 0, 9, 10, 7, 8, 9, 10];
/*for(rating of ratings){
    if(rating == 10) {
        console.log("Movie Number :"+ratings.indexOf(rating));
        console.log("MUST WATCH");
    }
}*/

/*for(let i = 0; i < ratings.length; i++){
    if(ratings[i] == 0){
        console.log(`Rating: ${ratings[i]}- SKIP`);
    }
    if(ratings[i] == 10){
        console.log(`Rating: ${ratings[i]}- MUST WATCH`);
    }
    console.log(`Rating: ${ratings[i]}`);
}*/

for(let i = 0; i < ratings.length; i++){
    if(ratings[i] == 0){
        console.log(`Rating: ${ratings[i]}- SKIP`);
        continue;
    }
    if(ratings[i] == 10){
        console.log(`Rating: ${ratings[i]}- MUST WATCH`);
        break;
    }
    console.log(`Rating: ${ratings[i]}`);
}
