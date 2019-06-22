let swapObj = {
    key1: 'Javascript',
    key2: 'React'
  }

function swap(obj, firstProp, secondProp){
   let newObj = {};
   newObj[firstProp] = obj[secondProp];
   newObj[secondProp] = obj[firstProp];
   return newObj;
  }
  
  console.log(swap(swapObj, 'key1', 'key2'));


  const firstArr = [10,20,30,40,50,70];
  const secondArr = [5,3,2,5]; //smallerArr.length = 4
  
  function arrMult(first, second){
    if (first.length > 0 && second.length > 0 &&
        Array.isArray(first) && Array.isArray(second)){
        let returnArr = [];
        let smallerArr = first.length < second.length ? first : second;
        let biggerArr = first.length >= second.length ? first : second;
        for (let i = 0; i < smallerArr.length; i++){
          //multiply the values in my arrays and store them in returnArr
          returnArr.push(smallerArr[i]*biggerArr[i]);
        }
        for (let j = smallerArr.length; j < biggerArr.length; j++){
          returnArr.push(biggerArr[j]);
        }
        return returnArr;
    } else {
      return 'input arguments are invalid';
    }
  }
  
  arrMult(firstArr, secondArr);
  
