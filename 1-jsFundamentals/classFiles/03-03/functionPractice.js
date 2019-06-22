/*
Function Rules
1. you only need parentheses to build a function and to call a funciton
2. almost always, you need {} around the function body
3. usually, you should 'return' from a function
4. not all functions need to have names

Function Ideas
1. they are used for epeated chunks of code, but nlike loops, the repeats do not have to happen consecutively
2. you need paramaters in your function when everytime you use the function it could run in a slightly different way

*/

function print(){console.log(1)}

let print2 = () => {console.log(2)}

function printPicker(number, firstFunc, secondFunc){
    if (number == 0){
        firstFunc();
    } else {
        secondFunc();
    }
}

printPicker(1, print, print2); //passing the function


function newFunc(param) {console.log(param)};

let firstVar = newFunc;
let secondVar = newFunc;
let thirdVar = newFunc;


/*
There are 2 types of values in Javascript:
1. pimitives: numbers, strings, unedfined, booleans
2. complex: arrays, objects, functions

Note:
-when you check for equality on primitives, you are checking that they look the same
-when you check for equality on complext types, you are checking that they point to the same thing
*/



let baseURL = 'https://rickandmortyapi.com/api//character/23';


form.addEventListener('submit', fetchRM);
