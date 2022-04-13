function Person () {
    this.name = 'Klaus',
    this.age = 25,

     this.greet = function () {  // function expression
        console.log('hello');
    }
}

// create objects
const person1 = new Person();
const person2 = new Person();

// access properties
console.log(person1.name);  // John
console.log(person2.name);  // John -----------

// constructor function
function Person () {
    this.name = 'Klaus',
    this.age = 25
}

// create an object
const person = new Person();
// constructor function
function Person (person_name, person_age, person_gender) {

    // assigning  parameter values to the calling object
     this.name = person_name,
     this.age = person_age,
     this.gender = person_gender,
 
     this.greet = function () {
         return ('Hi' + ' ' + this.name);
     }
 }
 
 
 // creating objects
 const person3 = new Person('Klaus',25, 'male');
 const person4= new Person('Freya', 25, 'female');
 
 // accessing properties
 console.log(person3.name); // "Klaus"
 console.log(person4.name); // "Freya"
 
 // constructor function
function Person () {
    this.name = 'John',
    this.age = 23
}


// creating objects
let person5 = new Person();
let person6 = new Person();

// adding property to person1 object
person5.gender = 'male';

// adding method to person1 object
person5.greet = function () {
    console.log('hello');
}

person5.greet();   // hello

// Error code person2 doesn't have greet() method
//person6.greet();
// constructor function
function Person () {
    this.name = 'John',
    this.age = 23
}

// creating objects
let person7= new Person();
let person8 = new Person();

// adding new property to constructor function
Person.prototype.gender = 'Male';

console.log(person7.gender); // Male
console.log(person8.gender); // Male
