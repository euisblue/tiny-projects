document.addEventListener("keydown", (e) => {
  const keycode = e.keyCode;
  const keyalpha = e.key;

  const keycodeDiv = document.querySelector('div.keycode');
  const keyalphaDiv = document.querySelector('div.keyalpha');

  keycodeDiv.innerText = keycode;
  keyalphaDiv.innerText = keyalpha.toUpperCase();

  // Previous characters
  const keycodePrevDiv = document.querySelector('div.keycodePrev');
  const keyalphaPrevDiv = document.querySelector('div.keyalphaPrev');

  console.log(keycodePrevDiv);
  keycodePrevDiv.innerText = keycode-1;
  keyalphaPrevDiv.innerText = String.fromCharCode(keycode-1).toUpperCase();

  // Next characters
  const keycodeNextDiv = document.querySelector('div.keycodeNext');
  const keyalphaNextDiv = document.querySelector('div.keyalphaNext');
  
  keycodeNextDiv.innerText = keycode+1;
  keyalphaNextDiv.innerText = String.fromCharCode(keycode+1).toUpperCase();
});
