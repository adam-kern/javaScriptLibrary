/*
HOISTING

1-grammarAndTypes
	04-hoisting.js
*/

//example 1:
console.log(scissors);
var scissors = 'blue'; //undefined

//example 1 breakdown:
var scissors;
console.log(scissors); //undefined
scissors = 'blue';

//example 2:
function hoist(Test){
	console.log(testVVar); //undefined
	var testVar = 10;
	console.log(testVar); //10
}

hoistTest();

//example 2 breakdown:
function hoistTest(){
	var testVar;
	console.log(testVar);
	testVar=10
	console.log(testVar);
}

hoistTest();