/*COMPARISON OPERATORS

5-expressionsAndOperators
	02-comparisonOperators.js
*/

//equality comparison operator
console.log('3' == 3); //true
console.log(4 == 4); //true
console.log(3 == '4') //false

//strict equality comparison operator
console.log(3 === 3); //true
console.log('3' === 3); //false

//not equal comparison operator
console.log('3' != 4); //true
console.log('3' != 3); //false

//strict not equal comparison operator
console.log('3' !== 3); //true
console.log(3 !== 3); //false

//greater than
console.log(3 > 2);
console.log(2>3);

//less than
console.log(2 < 3);
console.log( 3< 2);

//greater than or equal to
console.log(3 >= 2);
console.log(3 >= 3);

//less than or equal to
console.log(2 <= 3);
consoole.log(3 <= 2);

//And (both expressions on either side of the operator for And to return true
console.log(1<2 && 3>0); //true
console.log(2<1 && 3>0); //false

//Or (Only one of the expressions must be true of or to return true)
console.log(1<2 || 3<0); //true
console.log(2<1 || 3<0); //false

let obj = {key: 'test'};
console.log(obj == {key: 'test'}); //false
console.log(obj == obj); //true


let arr = [1,2,3,4];
console.log(arr == [1,2,3,4]); //false
console.log(arr == arr); //true

/*
IF CONDITIONALS
*/

//Conditionals use comparison operators to conditionally run code. You can build a process that will change upon inputs.

let isOn = true

if (isOn == true)
    console.log('the light is on!');


if(isOn)
	console.log('The light is on, yay');


let weather = 65;


//IF ELSE

let weather = 75;

if (weather < 70){
	console.log('wear a jacket');
} else {
	console.log('No jacket necessary!')
} //True so does run


//you can blend complex conditionals and if-elese statements based upon your need:
if (weather > 70 && typeof weather === 'number'){
	console.log('This weather is amazing!');
} else {
	console.log('Either the temperature is cool, the variable is not a string, or both');
}



//ELSE IF

//if-else if statements can be chained

let age = 30;

if (age >=25){
	console.log('yay! you can rent a car');
} else if (age >= 21){
	console.log('Yay! You can drink!');
} else if (age >= 18)
	console.log('Yay! You can vote!');
