let numbers = [2, 3, 5, 7, 11, 13, 17];

// create another array by slicing numbers from index 3 to 5
let newArray = numbers.slice(3, 6);
console.log(newArray);


let language= ["JavaScript", "Python", "C", "C++", "Java"];

// slicing the array (from start to end)
let newarr = language.slice();
console.log(newarr); // [ 'JavaScript', 'Python', 'C', 'C++', 'Java' ]

// slicing from the third element
let new_Arr1 = language.slice(2);
console.log(new_Arr1); // [ 'C', 'C++', 'Java' ]

// slicing from the second element to fourth element
let new_arr2 = language.slice(1, 4);
console.log(new_arr2); // [ 'Python', 'C', 'C++' ]



//In JavaScript, you can also use negative start and end indices. The index of the last element is -1, the index of the second last element is -2, and so on.

const languages = ["JavaScript", "Python", "C", "C++", "Java"];

// slicing the array from start to second-to-last
let new_arr = languages.slice(0, -1);
console.log(new_arr); // [ 'JavaScript', 'Python', 'C', 'C++' ]

// slicing the array from third-to-last
let new_arr1 = languages.slice(-3);
console.log(new_arr1);