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
  await sleep(getRandomArbitrary(300,1500))}
  alert(inputs.length + ' Feed Posts liked !');
}

async function LoadButton() {

if (document.URL.indexOf("feed") > 0) {
  await sleep(1000);  
  const newButton = document.createElement('button');
  newButton.textContent = 'Like Feed !';
  newButton.id = "boostArcButton"
  document.body.appendChild(newButton);

  const button = document.querySelector("#boostArcButton")
  button.addEventListener('click', onButtonClick);
  }
}

LoadButton();
