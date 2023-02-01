// Créer la logique de compte à rebours

/* choice.value = 5 minutes

choice.value * 60 = totalSeconds

let minutes = Math.floor(totalSeconds / 60);
let seconds = totalSeconds % 60
 */

// Créer un événement à la validation du form pour lancer le compte à rebours

let totalSeconds;
let interval;

//*fonction pour le compte à rebours
function compteRebours() {
  //*On recupère les minutes grâce aux total de second pour utilisé la variable après
  const minute = Math.floor(totalSeconds / 60);
  //*On récupère les secondes qu'il restent avec un modulo en divisant par 60 (car 1min = 60secondes)
  const seconds = totalSeconds % 60;

  let sec = seconds < 10 ? "0" + seconds : seconds;
  countdownDisplay.textContent = `${minute}:${sec}`;

  //*On fait un ternaire pour afficher un phrase qd le compte et à 00:00 et sinon on continue de décrémenter
  totalSeconds < 0
    ? ((countdownDisplay.textContent = "It's the final CountDown !"),
      clearInterval(interval))
    : totalSeconds--;
}

//*On utilise id du form pour faire un submit !! on utilise la balise form
form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (isNaN(choice.value)) {
    alert("Entrez un chiffre ou un nombre");
  } else {
    //*On cherche combien il y a de seconde dans le chiffre qui sera choisi pour l'utiliser dans le décompte
    totalSeconds = choice.value * 60;
    choice.value = ""; //!on vide l'input grâce à ça
    clearInterval(interval);
    interval = setInterval(compteRebours, 1000);
  }
});
