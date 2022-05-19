/**
 * GAME RULES:
 * 
 * The gane has two player, playing in rounds
 * In each turn, a player rolls a dice as many times as he wishes. Each result get added to his ROUND score
 * BUT, if a player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
 * The player can choose to Hold, which means that his ROUND score gets added to his GLOBAL score. After that, it's the next player's turn
 * The first player to reach 100 points on GLOBAL score wins the game
 * 
 */


/***
 * LESSONS:
 * How to create our fundamental game variables
 * How to generate a random number
 * How to manipulate the DOM
 * How to read from the DOM
 * How to change CSS styles
 * 
 * How to set up an event handler
 * What a callback function is
 * What an anonymous function is
 * Another to select elements by id
 * How to change the image in an <img> element
 * 
 * What the ternary operator is
 * How to add, remove and toggle HTML classes
 * 
 * What is a state variable, how to use it and why
 */

var scores, roundScore, activePlayer, gamePlaying;

init();


//To change the content of a selector, we use .textcontent
//To change the HTML of a selector, we use .innerHTML
//document.querySelector('#current-' + activePlayer).textContent = dice; //setting value
//document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + '</em>';


//Event and Event Handling

document.querySelector('.btn-roll').addEventListener('click', function() {

    if (gamePlaying) {
        // 1. Random number for dice using the math object
        var dice = Math.floor(Math.random() * 6) + 1;

        //2. Display the result
        var diceDOM = document.querySelector('.dice')
        diceDOM.style.display = 'block'; //show
        //To change the image on each click, we only need to change the source
        diceDOM.src = 'dice-' + dice + '.png';


        //3.Update the round score IF the rolled number was NOT a 1
        if (dice !== 1) {
            //Add score
            roundScore += dice;
            document.querySelector('#current-' + activePlayer).textContent = roundScore;
        } else {
            //Next player
            nextPlayer();
        }
    }

});

document.querySelector('.btn-hold').addEventListener('click', function() {

    if (gamePlaying) {
        //1. Add CURRENT score to the player's GLOBAL score
        scores[activePlayer] += roundScore;

        //2. Update the UI 
        document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];

        //3. Check if player won the game
        if (scores[activePlayer] >= 20) {
            document.querySelector('#name-' + activePlayer).textContent = 'Winner!';

            document.querySelector('.dice').style.display = 'none';
            document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
            document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
            gamePlaying = false;
        } else {
            //next player
            nextPlayer();
        }
    }
});

document.querySelector('.btn-new').addEventListener('click', init)

function init() {
    scores = [0, 0]; //Player scores
    roundScore = 0; //one round score at a time
    activePlayer = 0; //0 will be the first player and 1 will be the second player

    gamePlaying = true;

    //To hide the dice at the beginning of the game
    document.querySelector('.dice').style.display = 'none';

    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');

}

//To implement the Don't Repeat Yourself principle, we need to create another functiion for next player
function nextPlayer() {

    //Next player
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0; //ternary operator
        roundScore = 0;

        document.getElementById('current-0').textContent = '0';
        document.getElementById('current-1').textContent = '0';

        //document.querySelector('.player-0-panel').classList.remove('active');
        //document.querySelector('.player-1-panel').classList.add('active');

        document.querySelector('.player-0-panel').classList.toggle('active');
        document.querySelector('.player-1-panel').classList.toggle('active');
        document.querySelector('.dice').style.display = 'none';

}





















