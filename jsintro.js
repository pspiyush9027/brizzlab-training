/** 
 * This is a JavaScript file.
 */

console.log("Hello, World!"); // This line prints a greeting message to the console.

let name = "piyush";          //string
let age = 21;                 //number
const country = "India";      //constant
let isStudent = true;         //boolean

console.log( name);
console.log( age);
console.log( country);
console.log( isStudent);

//datatypes in js
//string, number, boolean, null, undefined, object, symbol
let score;         //undefined
let data = null;   //null

console.log( score);
console.log( data);

//object

let a={name:"piyush", age:21, countrys:"India"}; //object 

a.country={
    state1:"Uttar Pradesh",
    state2:"Bihar"
}        //object inside object

console.log( a.countrys);
console.log( a.country.state1);

//array

let arr=[1,2,3,4,5]; //array of numbers
let arr2=["piyush", "rahul", "sachin"]; //array of strings
let arr3=[1, "piyush", true, null]; //array of mixed datatypes

console.log( arr);
console.log( arr2);
console.log( arr3); 

//function 
const person = {
    fullname: function() {
        return this.firstName + " " + this.lastName;
    }
}
const person1 = {
    firstName: "John",
    lastName: "Doe",
}

const person2 = {
    firstName: "Jane",
    lastName: "Smith",
}   
console.log(person.fullname.call(person2));      // John Doe

// slice
let lang="javascript";
console.log("Slice(0,4):",lang.slice(0,4)); //javascript
console.log("Slice(4):",lang.slice(4));     //script

//split
let names="piyush,rahul,sachin";
let nameArray=names.split(",");
console.log("split:",nameArray);

//template literals
let username="piyush";
let age1=21;
console.log(`my name is ${username} and age is ${age} `);