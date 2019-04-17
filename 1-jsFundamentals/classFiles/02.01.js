for (let i = 0; i < 10; i++){
    console.log(i);
}

//for-in example 1
let parentThing = [1, 'Tracy', false, {key: 'playing'}];
for (let thing in parentThing){ //enumberable collections
    console.log(thing); //this output shows the position numbers of the elements in the array
}

//for-in example 2
let parentThing = [1, 'Tracy', false, {key: 'playing'}];
for (let thing in parentThing){ //enumberable collections
    console.log(parentThing[thing]); //this output shows the elements in the array
}

//for-in example 3
let obj = {keyA: true, keyB: 'Alan', keyC: [1,2,3]};
for (let placeholder in obj){
    console.log(obj[placeholder]); //use the squarebracket with FOR-IN to identify items in an object
}

let obj2= {first: '1150 academy', second: 1150, third: false}
for (let solution in obj2){
    console.log(obj2[solution])
}

//challenge 1
for (let i = 0; i < 10; i++){
    randNumber();
}

function randNumber(){
    console.log(Math.random()); //10 random numbers between 0-1
}

//challenge 2
function answ(favFood, favDessert){
    return `I would love to be eating ${favFood} with a ${favDessert}.`;
}
console.log(answ('bbq', 'pie'));

function first(inputFunction){
    inputFunction();
}
function second(){
    console.log('functions are amazing, but also hard!');
}
first(second);


function car(inputFunction){
    return inputFunction('not a car');
}
function truck(str){
    return str + ' I want a truck';
}

console.log(car(truck));


//challenge 3
//make 2 funtions. The first function takes a function as input and calls that input function with a number value.
//The second function takes a number as input, and concatenates that number with a tring
//The second should return the concatenation. The first should return the call.


function numb(input){
    return input(25);
}

function str(favNumber){
    return favNumber + ' - this is my favorite number'
}
console.log(numb(str));