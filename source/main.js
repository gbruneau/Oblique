import './style.css';
import myRes from './data/obliquestrategies.json';

var cards=[];
cards = myRes.cardlist;

// var cardsURL='data/obliquestrategies.json';

function getCard()
{
    var selectedCard=Math.floor(Math.random() * cards.length); 
    var cardText=cards[selectedCard].card;
    document.getElementById("card").innerHTML  = cardText;
}

document.getElementById('card').addEventListener("click",function(){
  getCard();
});
