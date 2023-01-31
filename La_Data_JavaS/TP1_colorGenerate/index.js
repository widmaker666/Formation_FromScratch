//!créer 3 variables pour stocker 3 chiffres aléatoires
//!Donner au body une couleur de fond en rgb()
//!Montrer sur le body la couleur rgb()

//Math.floor(Math.random() * 255);
//*Mon span qui permettra d'injecter le rgb
/* const divRgb = document.querySelector(".color"); */

//!créer 3 variables pour stocker 3 chiffres aléatoires en RGB()
/* let red = Math.floor(Math.random() * 255);
let green = Math.floor(Math.random() * 255);
let blue = Math.floor(Math.random() * 255); */

//*Voici comment on trouve le body dans window puis document puis body
const body = window.document.body;

/* color.textContent = "rgb(" + red + ", " + green + ", " + blue + ")";
body.style.background = "rgb(" + red + ", " + green + ", " + blue + ")";  */

//*créer un setInterval pour generer une couleur à interval d'1s

setInterval(() => {
  let red = Math.floor(Math.random() * 255);
  let green = Math.floor(Math.random() * 255);
  let blue = Math.floor(Math.random() * 255);

  color.textContent = "rgb(" + red + ", " + green + ", " + blue + ")";
  body.style.background = "rgb(" + red + ", " + green + ", " + blue + ")";
}, 2000);
