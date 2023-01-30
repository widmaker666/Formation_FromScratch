// Créer un événement au scroll

// Réduire la navbar quand on descend vers le bas, la remettre à sa taille initiale si on remonte tout en haut

// Faire apparaitre l'image de la partie improvise

// Faire apparaitre la popup quand on est en bas du site

// Bonus : quand on clicke sur la popup elle disparait pour toujours

/* Reduction de la taille de la navbar qd scroll down puis remettre navbar avec la height de départ qd scroll up */
window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    navbar.style.height = "45px";
    navbar.style.transition = "0.2s";
  } else {
    navbar.style.height = "90px";
  }
});
/* Img Improvise */
const imgImp = document.querySelector("#imgImprovise");


window.addEventListener("scroll", () => {
  if (window.scrollY > 500) {
    imgImp.style.opacity = 1;
    imgImp.style.transform = "none";
  } else {
    imgImp.style.opacity = "0";
  }
});

/* La popup dans bas */
const popup = document.querySelector("#popup");

window.addEventListener("scroll", () => {
  
  if (window.scrollY > 1400) {
    popup.style.opacity = 1;
     /* Cette écriture fonction aussi pour le tranbslate ou celle du haut */
    popup.style.transform =
      "translateX(500px)";
  } else {
    popup.style.opacity = "0";
  }
});

/* avec les ID on peut directement appliquer un addeventlistner snas passer par un query selctor de l'id */

closeBtn.addEventListener("click", () => {
  popup.style.opacity = "0";
});

subBtn.addEventListener("click", () => {
  popup.style.opacity = "0";
});
 

/* Correction */
/* 1er exo */
window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    navbar.style.height = "45px";
  } else {
    navbar.style.height = "90px";
  }

  /* la taille total du document est : document.body.offsetHeight */
  let scrollValue =
    (window.scrollY + window.innerHeight) / document.body.offsetHeight;  

  if (scrollValue > 0.45) {
   imgImprovise.style.opacity = 1;
   imgImprovise.style.transform = "none";
  }

  if (scrollValue > 0.85) {
    popup.style.opacity = 1;
    popup.style.transform = "none"
  }
});

closeBtn.addEventListener("click", () => {
  popup.style.opacity = "0";
  popup.style.transform = "translateX(500px)";
});
