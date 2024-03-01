// import { apiKey } from "./util.js";

// import apiKey from "./util.js";
// import { apiKey, abc as content } from "./util.js";
// import * as util from "./util.js";

// console.log(util.apiKey);
// console.log(content);

// const userMessage = "Hello World!!!";

// console.log(userMessage);
// console.log(userMessage);

// console.log(10 + 5);

// if (10 === 10) {
//     console.log("works");
// }

// function greet(userName, message) {
//     // console.log(userName);
//     // console.log(message);
//     return "Hi I'm " + userName + " " + message;
// }

// greet("bob", "Hello");
// greet("max", "How are you?");
// console.log(greet("bob", "Hello"));
// console.log(greet("max", "How are you?"));

// const user = {
//     name: 'bob',
//     age: 36,
//     greet() {
//         console.log("hello");
//         console.log(this.age);
//     }
// };



// console.log(user.name);

// user.greet();


// class User {

//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }

//     greet(){
//         console.log("Hi!");
//     }
// }

// const user1 = new User("Manuel", 35);

// console.log(user1);
// user1.greet();

// const hobbies = ["Sports", "Cooking", "Reading"];


// console.log(hobbies[0]);

// hobbies.push("Working");
// console.log(hobbies);

// const index = hobbies.findIndex((item) => {
//     return item === 'Sports';
// });

// const index = hobbies.findIndex((item) => item === 'Sports');

// console.log(index);

// const editedHobbies = hobbies.map((item) => ({text: item + "!"}));

// console.log(editedHobbies);


// function transformToObjects(numberArray) {
//     const result = numberArray.map((item) => ({val: item}));
//     return result;
// }

// const num = [1, 2, 3];
// const transformedArray = transformToObjects(num);

// // When you directly log an array of objects using console.log(), 
// // it may display each object as [object Object]. 
// // To see the actual content of the objects, 
// // you should use JSON.stringify()

// console.log(JSON.stringify(transformedArray, null, 2));

// const userNameData = ["max", "bob"];
// const [firstName, lastName] = ["max", "bob"];

// const firstName = userNameData[0];
// const lastName = userNameData[1];
// console.log(firstName + " " + lastName);


// const {name: userName, age: userAge} = {
//     name: 'bob',
//     age: 36,
// };

// console.log(userName);
// console.log(userAge);


// const hobbies = ["Sports", "Cooking"];

// const user = {
//     name: 'bob',
//     age: 36,
// };

// const newHobbies = ["Reading"];

// const mergedHobbies = [...hobbies, ...newHobbies];

// console.log(mergedHobbies);

// const extendedUser = {
//     isAdmin: true,
//     ...user
// }

// console.log(extendedUser);


// const hobbies = ["Sports", "Cooking"];

// for (const hobby of hobbies) {
//     console.log(hobby);
// }

// const list = document.querySelector("ul");
// list.remove();

// function handleTimeout() {
//     console.log("Timed out!");
// }

// const handleTimeout2 = () => {
//     console.log("Timed out again!");
// };

// setTimeout(handleTimeout, 2000);
// setTimeout(handleTimeout2, 3000);
// setTimeout(() => {
//     console.log("more timed out!");
// }, 4000);


// function greeter(greetFn) {
//     greetFn();
// }

// greeter(() => console.log("Hi, world!"));

// function init() {
//     function greet() {
//         console.log("Hi");
//     }

//     greet();
// }
// init();


let userMessage = "Hello, world!";
userMessage = userMessage.concat("!!!");

console.log(userMessage);

const hobbies = ["Sports", "Cooking"];
hobbies.push("Working");
console.log(hobbies);




