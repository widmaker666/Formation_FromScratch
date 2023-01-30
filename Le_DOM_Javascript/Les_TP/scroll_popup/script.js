// Créer un événement au scroll

// Réduire la navbar quand on descend vers le vite, la remettre à sa taille initiale si on remonte tout en haut

// Faire apparaitre l'image de la partie improvise

// Faire apparaitre la popup quand on est en bas du site

// Bonus : quand on clicke sur la popup elle disparait pour toujours

/* Reduction de la taille de la navbar qd scroll down puis remettre navbar avec la height de départ qd scroll up */
window.addEventListener("scroll", () => {
  if (window.scrollY > 0) {
    navbar.style.height = "50px";
    navbar.style.transition = "0.5s";
  } else {
    navbar.style.height = "90px";
  }
});
/* Img Improvise */
const imgImp = document.querySelector("#imgImprovise");
console.log(imgImp);

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
console.log(popup);
window.addEventListener("scroll", () => {
  console.log(window.scrollY);
  if (window.scrollY > 1000) {
    popup.style.opacity = 1;
    popup.style.transform =
      "translateX(0)"; /* Cette écriture fonction aussi pour le tranbslate ou celle du haut */
  } else {
    popup.style.opacity = "0";
  }
});
/* avec les ID on peut directement appliquer un addeventlistner snas passer par un query selctor de l'id */

closeBtn.addEventListener("click", () => {
    popup.style.opacity = "0";
})

subBtn.addEventListener("click", ()=>{    
    popup.style.opacity = "0";
})
