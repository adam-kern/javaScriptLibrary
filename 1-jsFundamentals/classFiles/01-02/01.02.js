//arrays
let newArr = ['Brie', 17, true, {ketchup: true, pickles: false, meat: true}];
//arrays have numbered elements. The numbers are index-es and the values are the elements
// console.log(newArr[3]);
//newArr[3].pickles = true;
//console.log(newArr[3]);
//newArr[3] = 'Zach is one bad dude with styling';
//console.log(newArr[3]);

//conditionals
let isRainy = true;
let isWarm = false;

if (isRainy){
    console.log('bring your umbrella');
}  else {
    console.log('leave the umbrella at home')
}

if (isWarm){
    console.log('wear shorts');
} else {
    console.log('wear a parka');
}


let gpas = [1.9, 3.5, 4.0, 2.8];
let singleGpa = gpas[1]; 

if (singleGpa == 4.0){
    console.log('wow! that is amazing!');
} else if (singleGpa >= 3.0){
    console.log ('that is a strong gpa');
} else {
    console.log('...eh, you might wnana hit the books');
}

/*
Challenge 1:
Write an array with at least 5 different numbers stored as values in the array.  Use if-elseif statements to
change one value of the array based upon the index number passed to the conditional.  Use the =, +=, /=, 
%=, and **= operators to make the change of the array value (only use one operator per conditional 
statement).
*/

let adam_array = [1, 2, 3, 4, 5];
let indexNum = 2

if (indexNum == 0) {
    adam_array [0] **= 5;
} else if (indexNum == 1) {
    adam_array [1] **= 5;
} else if (indexNum == 2) {
    adam_array [2] **= 5;
} else if (indexNum == 3) {
    adam_array [3] **= 5;
} else if (indexNum == 4) {
    adam_array [4] **= 5;
}

/*
Challenge 2:
Write an object that stores information about your favorite movie.  nameOfMovie, runTime, characters, and
genre should be keys directly inside the object.  Inside of characters should be no more than 2 character 
objects, each of which stores name, age, and items.  Inside of items should be no more than 2 item
objects, each of which stores name and color.

Use console.log statements to show that you can print out the nameOfMovie, the characters, the age of a
character, and colors for the objects the characters have.
*/

let adam_movie = {
    nameOfMovie: 'Back to the Future',
    runTime: '2 hours',
    characters: {
        charOne:{
            name: 'Marty McFly',
            age: 18 
        },
        charTwo:{
            name: 'Doc Brown', 
            age: 65 
        } 
    },
    genre: 'scifi'
}

console.log(adam_movie.characters.charOne.age)


/*
Challenge 3:
Try to predict the behavior of each variable separatey (first, second, and third).
//1st example:
console.log(first); //undefined
console.log(second); //breaks (because let)
console.log(third); //breaks (because const)
var first = 1;
let second = 2;
const third = 3;
​
//2nd example:
hoistTest();
var first = 5;
function hoistTest() {
 console.log(first); //undefined
}
​
//3rd example:
function hoistTest(){
 console.log(first, second, third);
 if (true){
  var first = 1; //undefined
  let second = 2; //break
  const third = 3; //breal
 }
 console.log(first, second, third);
}
hoistTest();
*/