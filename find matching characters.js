const text = 'Whether its color or colour, it is all the same.The human eye can see a wide gamut of colours, which makes us unique as a species.';

const pattern = /colou?rs?/g;

console.log(pattern.exec(text)[0]);
console.log(pattern.exec(text)[0]);
console.log(pattern.exec(text)[0]);

let results;
while ((results = pattern.exec(text)) !== null)
{
 console.log(results[0]);
}


const string1 = "I love to write JavaScript programs";

let r = /[a-z]/;
let index = string.search(r);
console.log(index); // 2 -> matches 'l'

let r1= /J[a-z]*/i;
let index1 = string.search(r1);
console.log(index1); // 16 -> matches 'JavaScript'

let r2 = /[0-9]/;
let index2 = string.search(r2);
console.log(index2); // -1 -> No digit match



const message = "JavaScript is a fun programming language.";

// regular expression that checks if message contains 'programming'
const exp = /programming/;

// check if exp is present in message
let result1 = message.match(exp);
console.log(result1);


const strings = "My name is Albert. YOUR NAME is Soyuj.";

// expression matches case-insensitive "name is"+ any alphabets till period (.)
const re = /name\sis\s[a-zA-Z]+\./gi;

let result = string.match(re);
console.log(result); // [ 'name is Albert.', 'NAME is Soyuj.' ]

// using named capturing groups
const re1 = /name\sis\s(?<name>[a-zA-Z]+)\./i;
let found1 = string.match(re1);

console.log(found1.groups); // {name: "Albert"}




const string2 = "I am learning JavaScript not Java.";
const ra = /Java[a-z]*/gi;

let result2= string.matchAll(re);

for (match of result2) {
  console.log(match);
}



const string = "My name is Albert. YOUR NAME is Soyuj.";

// expression matches case-insensitive "name is"+ any alphabets till period (.)
// using named capturing groups
const ri = /name\sis\s(?<name>[a-zA-Z]+)\./gi;
let found = string.matchAll(ri);

for (const match of found){
    console.log(`Found "${match[0]}" at index ${match.index}. Captured name = ${match.groups['name']}`)
}