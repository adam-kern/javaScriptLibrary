let arr = [{key: 'academy'}, undefined, true, ['brie', 'rob', [true, false], undefined], 1150];

// console.log(arr[0]);
// console.log(arr[1]);
// console.log(arr[3][2][1]);

// arr[1] = 'whatever i want';

// console.log(arr[1]);

for (let i = 0; i < arr.length; i++){
  console.log(arr[i]);
}


// Challenge 1:
// Build an array that has a string, a boolean, another array, an object, and a number inside.  Write a separate
// console.log to show every value within the array.  Once you've done that, use a for-of loop to console.log
// every value within the array.  If you can get the for-of loop to work correctly, try this with a .forEach.

let arr2 = ['adam', true, ['chris', 'lisa', 'matt', 'sam'], [{home: 'zionsville', address: 9684}], 2019]

//console.log(arr2[0])
//console.log(arr2[1])
//console.log(arr2[2])
//console.log(arr2[3])
//console.log(arr2[4])

// for(let i = 0; i < arr2.length; i++){
//     console.log(arr2[i])
// }

// for (let x of arr2){
//     console.log(x)
// }

arr2.forEach((val, index) => {console.log(val, index)})


// Challenge 2:
// Build an array with the values: 'swimming', 'running', 'yoga', 'biking', 'climbing'.  Add the value
// 'stretching' with 'splice', but don't remove any contents in the array.  Add the value 'basketball' with
// 'splice', but *do* remove one element.  Finally, use 'slice' to cut and save a portion of your array to 
// a separate variable.  Use console.logs between every 'splice' or 'slice' to confirm that your array is 
// changing as you expect it to.


let arr3 = ['swimming', 'running', 'yoga', 'biking', 'climbing']
arr3.splice(0,0,'stretching');
console.log(arr3)
arr3.splice(0,2,'basketball')
console.log(arr3)
let arr4 = arr3.slice(1,3)
console.log(arr4)

/*
Challenge 3:
This challenge has 2 parts.  First, create an object with 5 key-value pairs.  Using a Javascript feature 
demonstrated in your videos, create an array of all the keys in your object.  Use a for-of loop to
console.log every key in your keys array.
input: {key1: 'yeah!', key2: 1150, key3: true, key4: [1,2,3,4], key5: {innerKey: 'mind blown!'}}
output: key1, key2, key3, key4, key5
Once you've completed the above, use the .forEach method and your keys array to console.log all the values
in your object.  Show these values using [] notation but not using Object.values().
input: [key1, key2, key3, key4, key5]
output: 'yeah!', 1150, true, [1,2,3,4], {innerKey: 'mind blown!'}
*/

let obj = {
    key1: 'yeah!',
    key2: '1150',
    key3: 'true',
    key4: [1,2,3,4],
    key5: {innerKey: 'mind blown!'},
}

let keys = Object.keys(obj) //Object.keys (constructor) gives us the names of the keys in an array -> 
console.log(keys)

for (let answ of keys){
     console.log(answ)
}

