import './style.css';
import cards from './data/obliquestrategies.json';

// var cardsURL='data/obliquestrategies.json';

function randomHexColor() {
  return '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
}

function hexToRgb(hex) {
  const r = parseInt(hex.slice(1, 3), 16) / 255;
  const g = parseInt(hex.slice(3, 5), 16) / 255;
  const b = parseInt(hex.slice(5, 7), 16) / 255;
  return { r, g, b };
}

function getLuminance({ r, g, b }) {
  const [rs, gs, bs] = [r, g, b].map(c => c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4));
  return 0.2126 * rs + 0.7152 * gs + 0.0722 * bs;
}

function createRandomColorRamp() {
  const color1 = randomHexColor();
  const color2 = randomHexColor();
  const backgroundStyle = `linear-gradient(135deg, ${color1}, ${color2})`;

  // Average luminance of the two colors for contrast decision
  const rgb1 = hexToRgb(color1);
  const rgb2 = hexToRgb(color2);
  const avgLum = (getLuminance(rgb1) + getLuminance(rgb2)) / 2;

  const fontColor = avgLum > 0.5 ? '#000000' : '#FFFFFF';

  return {
    background: backgroundStyle,
    fontColor,
    colors: [color1, color2]  // for reference
  };
}

function getCard()
{
    var selectedCard=Math.floor(Math.random() * cards.length); 
    var cardText=cards[selectedCard].card;
    var cardNode=document.getElementById("card")
    cardNode.innerHTML  = cardText;
    var colorRamp=createRandomColorRamp();
    cardNode.style.background=colorRamp.background;
    cardNode.style.color=colorRamp.fontColor;

}

document.getElementById('card').addEventListener("click",function(){
  getCard();
});
