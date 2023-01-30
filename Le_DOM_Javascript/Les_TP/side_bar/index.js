// Créer un événement au click sur le hamburger menu pour sortir la sidebar, ranger la sidebar si on reclick dessus

// Ranger la sidebar si on click sur le contenu principal

// BONUS
// Créer en css l'hamburger menu qui se transforme en croix

// Aide
// Priorités en CSS : !important >id > classe > baliseHtml

/* Correction TP */
const sideBar = document.getElementById("side-bar");

btn.addEventListener("click", () => {
  /* On test avec un log pour cliquer sur le burger 
    console.log("test"); */
  sideBar.classList.toggle("active");
});

const content = document.querySelector(".content");
content.addEventListener("click", () => {
  sideBar.classList.remove("active");
});
