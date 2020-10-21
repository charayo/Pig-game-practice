var currentScore, score, activePlayer;
score = [0,0];
currentScore = [0,0];
activePlayer = 0;



//I want to create an init function that clears all the value on the screen and also hides the die on start





/* Next thing I wanna do is to activate the roll die button so I can see its effect. The roll dice button will be 
a function that generates random numbers from 1 to 6 and I will perform a Dom mutation that manipulates the die image */

//Activating the roll die button and causing it to change the die image in the centre
document.querySelector('.btn-roll').addEventListener('click', function(){
    var dice = Math.floor(Math.random()*6) + 1;
    var dieAnchor = document.querySelector('.dice')
    dieAnchor.src = "dice-" + dice + ".png";
    //console.log(dice);  
    









});









