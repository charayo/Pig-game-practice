/*Here is the logic: two players roll a die simultaneously and whoever gets to the target point first wins.*/
var currentScore, score, activePlayer, ayo, gameOn;
score = [0, 0];
currentScore = 0;
activePlayer = 0;
gameOn = true;

//I want to create an init function that clears all the value on the screen and also hides the die on start
function initAll() {
    //This clears the all the scores 
    document.querySelector('#score-0').textContent = '0';
    document.querySelector('#score-1').textContent = '0';
    init();
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.add('active');
    document.querySelector('#name-0').textContent = 'Human';
    document.querySelector('#name-1').textContent = 'Computer';
    score = [0, 0];
    activePlayer = 0;
};
function init() {
    document.querySelector('#current-0').textContent = '0';
    document.querySelector('#current-1').textContent = '0';
    document.querySelector('#die1').style.visibility = 'hidden';
    document.querySelector('#die2').style.visibility = 'hidden';
    currentScore = 0;
};
initAll();

function nextPlayer() {
    //this clears the current score and makes the die invisible when it's the next player's turn
    init();
    //changing the active player
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    //This changes the inerface to the active player
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
};

//Activating the roll die button and causing it to change the die image in the centre
document.querySelector('.btn-roll').addEventListener('click', function () {
    rollDie();
});

function cast() {
    //generating the die count
    var die1 = Math.floor(Math.random() * 6) + 1;
    var die2 = Math.floor(Math.random() * 6) + 1;
    //displaying the dice count
    var dieAnchor1 = document.querySelector('#die1');
    dieAnchor1.src = "dice-" + die1 + ".png";
    document.querySelector('#die1').style.visibility = 'visible';
    //Die 2
    var dieAnchor2 = document.querySelector('#die2');
    dieAnchor2.src = "dice-" + die2 + ".png";
    document.querySelector('#die2').style.visibility = 'visible';
    //showing the count result in the current-score board
    currentScore += (die1 + die2);
    document.querySelector('#current-' + activePlayer).textContent = currentScore;
}

var rollDie = function () {
    if (gameOn) {
        cast();
        btnHold();
    }
};
function compRoll() {
    nextPlayer();
    setTimeout(function () {
        cast();
        setTimeout(function () {
            comHold();
            console.log(true);
        }, 1000)
    },1000);
}

//The Newgame button
document.querySelector('.btn-new').addEventListener('click', function () {
    gameOn = true;
    initAll();
});

//The hold function which transfers the current score to the scoreboard and initiates the next player
var btnHold = function () {
    winnersFunc();
    if (score[activePlayer] < winScore) {
        setTimeout(compRoll, 2000)
    }
};
function winnersFunc() {
    //Adding the current score to the global score board
    score[activePlayer] += currentScore;

    //Printing the score to the board
    document.querySelector('#score-' + activePlayer).textContent = score[activePlayer];

    //Setting the target point for the winner of the game
    var targetScore = document.querySelector('.input').value;
    if (targetScore) {
        winScore = targetScore;
    } else {
        winScore = 20;
    }
    if (score[activePlayer] >= winScore) {
        document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
        document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
        document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
        document.querySelector('#die1').style.visibility = 'hidden';
        document.querySelector('#die2').style.visibility = 'hidden';
        gameOn = false;
    };
}
function check() {
    if (gameOn && currentScore >= 1) {
        winnersFunc();
        if (score[activePlayer] < winScore) {
            setTimeout(nextPlayer, 1000)
        }
    }
}
//this holds the computer score and calls the human player
var comHold = function () {
    check();
};