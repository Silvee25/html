const message = "ball bat";

// replace the first b with c
let result = message.replace('b', 'c');
console.log(result);



const text1= "Java is awesome. Java is fun."

// passing a string as the first parameter
let pattern1 = "Java";
let new_text1 = text.replace(pattern, "JavaScript");
console.log(new_text1);

// passing a regex as the first parameter
pattern = /Java/;
new_text = text.replace(pattern, "JavaScript");
console.log(new_text);



T//o replace all occurrences of the pattern, you need to use a regex with a g switch (global search

const texts= "Java is awesome. Java is fun."

// notice the g switch in the regex pattern
const patterns = /Java/g;
const new_texts = text.replace(pattern, "JavaScript");
console.log(new_texts);



//The replace() method is case sensitive. To perform the case-insensitive replacement, you need to use a 


const text2 = "javaSCRIPT JavaScript"

// the first occurrence of javascript is replaced
let pattern2 = /javascript/i;  // case-insensitive search
let new_text2 = text.replace(pattern, "JS");
console.log(new_text2)  // JS JavaScript

// all occurrences of javascript is replaced
pattern = /javascript/gi;  // case-insensitive and global search
new_text = text.replace(pattern, "JS");
console.log(new_text)  // JS JS




const text = "Random digit: 3"

// generate a random digit between 0 and 9
function generateRandomDigit() {
  return Math.floor(Math.random() * 10)
}

// regex to match a digit
const pattern = /\d/;

const new_text = text.replace(pattern, generateRandomDigit);
console.log(new_text)







