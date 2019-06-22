/*
Challenge 1 (Arrays, Array Methods):
Make an array that stores numbers.  Using Array.prototype.forEach(), add a random
number amount to the value of every element in the array.  Console.log your array
to confirm that it worked.
*/

let arr = [1,2,3,4,5];

//basic example
//arr.forEach((value) => {console.log(value + 1)});

arr.forEach((value) => {console.log(value + Math.random())});

/*
Use the object. Make a function which takes an object and returns an array of every other key.
*/

let obj = {
    keyA:'1150',
    keyB: 1150,
    keyC: undefined,
    keyD: null,
    keyE: [1,2,3]
  }
  
  const objPlay = (object) => {
    let keys = Object.keys(object); //keys is an array of the keys from object
    let returnArr = []; //this is an empty return array
    for (let i = 0; i < keys.length; i++){ //this for loop goes through everyvalue in the keys array
      if (i % 2 == 0){
        returnArr.push(keys[i]) //this add the even elements to the return array
      }
    }
    return returnArr;
  }
  
  console.log(objPlay(obj));