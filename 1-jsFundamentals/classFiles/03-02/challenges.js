/*
Using the challenge1.html file provided, make the first button toggle the opacity of
the first image between 1.0 and 0.5 (this will toggle no opacity and 50% opacity).
The second button should toggle the borderRadius between 0% and 50%.  Have fun!
*/

let happyButton = document.getElementById('happyButton');
    let happyPic = document.getElementById('happyPic');
    happyButton.addEventListener('click', (event) => {
      if (happyPic.style.opacity == '0.5'){
        happyPic.style.opacity = '1.0';
      } else {
        happyPic.style.opacity = '0.5';
      }
    })
    let armsButton = document.getElementById('armsButton');
    let armsPic = document.getElementById('armsPic');
    armsButton.addEventListener('click', (event) => {
      if (armsPic.style.borderRadius == '50%'){
        armsPic.style.borderRadius = '0%';
      } else {
        armsPic.style.borderRadius = '50%';
      }
    })

/*
Challenge 2:
Using the 'balldontlie' open API, grab data from NBA players and display the
info to the screen.  Using whatever tag you would like, display the player's name
and the team they play for.

https://www.balldontlie.io/#introduction
*/

fetch('https://www.balldontlie.io/api/v1/players')
      .then(res => res.json())
      .then(json => showToConsole(json.data))

    function showToConsole(players){
      let body = document.getElementsByTagName('body')[0];
      players.forEach((player) => {
        let p = document.createElement('p');
        p.innerText = player.first_name;
        body.appendChild(p);
      })
    }


function firstFunction(func){
let newVar = 3;
for (let i = 0; i < 10; i++){
        newVar = func(newVar)
    console.log(newVar);
}
}
function secondFunction(variable){
    return variable + 5;
}
firstFunction(secondFunction);