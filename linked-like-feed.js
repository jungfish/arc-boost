function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}

async function onButtonClick() {
  var inputs = document.querySelectorAll('.react-button__trigger') ;
  for(var i=0; i<inputs.length;i++) {
  inputs[i].click();
  await sleep(getRandomArbitrary(100,500))}
  alert('Feed Post liked!');
}

async function LoadButton() {

await sleep(1000);  
const newButton = document.createElement('button');
newButton.textContent = 'Like Feed !';
newButton.id = "boostArcButton"
document.body.appendChild(newButton);
console.log("pouet")

const button = document.querySelector("#boostArcButton")
button.addEventListener('click', onButtonClick);
}

LoadButton();
