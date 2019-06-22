var person = prompt("Please enter your name", "Harry Potter");

if (person == null || person == "") {
  txt = "User cancelled the prompt.";
} else {
  txt = "Hello " + person + "! How are you today?";
}


  let cars = ['mini', 'bmw', 'chevy', 'ford'];
  let car = {
      name: 'mini',
      year: 2004,
      accidents: 2,
    }
    
    consol.log(typeof cars)

    let btf = {
        name:'back to the future',
        character: 'Marty McFly',
        Year: 1985,
      }
      
      if (Year == 1985){
        var outcome = "Marty is in the present";
      }

      let btf = {
        name:'back to the future',
        character: 'Marty McFly',
        Year: 1985,
      }
      
      if (btf.Year = typeof year) {
        var outcome = "the value is a number";
      }


function objectChecker(object){ 
 return [Object.keys(obj), Object.values(obj), Object.keys(obj).length];
}
let obj = {name: 'Batman', age: 42, isVillain: false,};
objectChecker(obj);
console.log(objectChecker(obj));
    
      
function firstFunction(func){
  let x=3;
  for(i=0; i<10; i++){
   x=func(x)
    console.log(x)
    } return x
  }
  
  function secondFunction(variable){
    variable=variable+5;
    return variable
  }
  firstFunction(secondFunction)
  
    
  function pythConverse(a, b, c){
    let num1=a*a +b*b;
    let num2=c*c
    if (num2 === num1) {
      return  'yes!'
      }else{
        return 'no!'
      }
    }
  console.log(pythConverse(3,4,5))