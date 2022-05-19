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
 */

var scores, roundScore, activePlayer;

scores = [0, 0]; //Player scores
roundScore = 0; //one round score at a time
activePlayer = 0; //0 will be the first player and 1 will be the second player


//To change the content of a selector, we use .textcontent
//To change the HTML of a selector, we use .innerHTML
//document.querySelector('#current-' + activePlayer).textContent = dice; //setting value
//document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + '</em>';

//To hide the dice at the beginning of the game
document.querySelector('.dice').style.display = 'none';

document.getElementById('score-0').textContent = '0';
document.getElementById('score-1').textContent = '0';
document.getElementById('current-0').textContent = '0';
document.getElementById('current-1').textContent = '0';

//Event and Event Handling

document.querySelector('.btn-roll').addEventListener('click', function() {

    // 1. Random number for dice using the math object
    var dice = Math.floor(Math.random() * 6) + 1;

    //2. Display the result
    var diceDOM = document.querySelector('.dice')
    diceDOM.style.display = 'block'; //show
    //To change the image on each click, we only need to change the source
    diceDOM.src = 'dice-' + dice + '.png';


    //3.Update the round score IF the rolled number was NOT a 1



})





















