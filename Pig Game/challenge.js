/***CHALLENGES
 * Change the game to follow these rules:
 * 
 * 1. A player looses his ENTIRE score when he rolls two 6 in a row. After that, it's next player's turn.
 * (Hint: Always save the previous dice roll in a seperate variable)
 * 2. Add an input field to the HTML where player can set the winning score, so that they can change the 
 * predefinesd score of 100. ( Hint: you can read that value with the .value property in JavaScript. This is a 
 * good opportunity to use google to figure this out :)
 * 3. Add another dice to the game, so that there are two dices now. The player looses his current score when one of
 * them is a 1. (Hint: you will need CSS to positon the second dice, so take a look at the CSS code for the first one)
 */

var scores, roundScore, activePlayer, gamePlaying;

init();


//Event and Event Handling

document.querySelector('.btn-roll').addEventListener('click', function() {

   if (gamePlaying) {
       // 1. Random number for dice using the math object
       var diceOne = Math.floor(Math.random() * 6) + 1;
       var diceTwo = Math.floor(Math.random() * 6) + 1;


       //2. Display the result
       document.getElementById('dice-0').style.display = 'block';
       document.getElementById('dice-1').style.display = 'block';
       //To change the image on each click, we only need to change the source
       document.getElementById('dice-0').src = 'dice-' + diceOne + '.png';
       document.getElementById('dice-1').src = 'dice-' + diceTwo + '.png';


       //3.Update the round score IF the rolled number was NOT a 1
       if (diceOne !== 1 && diceTwo !== 1) {
        //Add score
        roundScore += diceOne + diceTwo;
        document.querySelector('#current-' + activePlayer).textContent = roundScore;
        } else if (diceOne === 6 && diceTwo === 6) {
            //Player looses scores
           scores[activePlayer] = 0;
           document.querySelector('#score-' + [activePlayer]).textContent = '0';
           nextPlayer()
        } else {
            //Next player
            nextPlayer();
        }
       /*if (dice === 6 && lastDice === 6) {
           //Player looses scores
           scores[activePlayer] = 0;
           document.querySelector('#score-' + [activePlayer]).textContent = '0';
           nextPlayer()
       } else if (dice !== 1) {
           //Add score
           roundScore += dice;
           document.querySelector('#current-' + activePlayer).textContent = roundScore;
       } else {
           //Next player
           nextPlayer();
       }
       lastDice = dice;
       */
   }
});

document.querySelector('.btn-hold').addEventListener('click', function() {

   if (gamePlaying) {
       //1. Add CURRENT score to the player's GLOBAL score
       scores[activePlayer] += roundScore;

       //2. Update the UI 
       document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];

       var input = document.querySelector('.form-control').value;
       var winningScore;

       //Undefined, 0, null or "" are COERCED to false
       //Anything else is COERCED to true
       if (input) {
           winningScore = input;
       } else {
           winningScore = 100;
       }

       //3. Check if player won the game
       if (scores[activePlayer] >= winningScore) {
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
   document.getElementById('dice-0').style.display = 'none';
   document.getElementById('dice-1').style.display = 'none';

   document.querySelector('.form-control').value = '';
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
    document.getElementById('dice-0').style.display = 'none';
    document.getElementById('dice-1').style.display = 'none';

}