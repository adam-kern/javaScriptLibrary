function pacersWon(){
    console.log("Pacers won!");
}
pacersWon();

pacersWon();
pacersWon();
pacersWon();
pacersWon();
pacersWon();

function addAnyTwoNumbers(x, y){
    console.log(x + y);
}

addAnyTwoNumbers(4, 5);
addAnyTwoNumbers(6, 11);
addAnyTwoNumbers(7, 8);


function subtractTwoNumbers(x, y){
    console.log(x-y);
}
subtractTwoNumbers(7, 5)


function subtractTwoNumbers(firstNum, secondNum){
    console.log(secondNum - firstNum);
}

subtractTwoNumbers(5, 7);

function getMyTaxReturnAndDoMyTaxesAndStuff(a, x, y, z){
    let myInc = a * x;
    let myTaxes = myInc - y;
    let total = myTaxes + z;
    return total; 
}

getMyTaxReturnAndDoMyTaxesAndStuff(10000, 5, 50000, 0);


function add(x, y){
    let sum = x + y;
    console.log(sum);
    return sum;
}

add(21, 1);


function fullName(first, last){
    var wholeName = first + " " + last;
    console.log(wholeName);
    return wholeName;
}

fullName("Adam", "Kern");


function petNameAndBreed(name, breed){
    var petDetails = name + ", " + breed;
    console.log(petDetails);
    return petDetails;
}
petNameAndBreed("Baby Shark", "Beta Fish");

function indianaTax(quantity, price){
    var tax = 0.07;
    var totalTax = quantity * price * tax;
    var totalPrice = totalTax + quantity * price;
    console.log(totalPrice);
    return totalPrice;
}

indianaTax(2, 17);