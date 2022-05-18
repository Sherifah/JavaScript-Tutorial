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
 */

var scores, roundScore, activePlayer, dice;

scores = [0, 0]; //Player scores
roundScore = 0; //one round score at a time
activePlayer = 0; //0 will be the first player and 1 will be the second player

//Cal random number for dice using the math object

dice = Math.floor(Math.random() * 6) + 1;
//console.log(dice);

//To change the content of a selector, we use .textcontent
//To change the HTML of a selector, we use .innerHTML
document.querySelector('#current-' + activePlayer).textContent = dice;
//document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + '</em>';





















