// Créer 3 ronds de tailles différentes (dont un qui remplacera la souris)

// Ajouter un événement sur la fenetre (window) puis animer la position de ces ronds (top, left injecter "e")

// S'assurer que les liens sont clickables

// Donner un style de transparence aux 2 plus gros ronds (mix-blend-mode)

/* MON CODE */
/* const mouse = document.querySelector("#cursor");
    const mouse2 = document.querySelector("#mouse1");
    const mouse3 = document.querySelector("#mouse2");


window.addEventListener("mousemove", (e) => {
  mouse.style.top = e.y + "px";  
  mouse.style.left = e.x + "px";  
});

window.addEventListener("mousemove", (e) => {
  mouse2.style.top = e.y + "px";
  mouse2.style.left = e.x + "px";
});

window.addEventListener("mousemove", (e) => {
  mouse3.style.top = e.y + "px";
  mouse3.style.left = e.x + "px"
});
 */

//code correction 1
//cursor er mouse1
window.addEventListener("mousemove", (e) => {
  cursor.style.top = e.y + "px";  
  cursor.style.left = e.x + "px"; 
  
  mouse1.style.top = e.y + "px";
  mouse1.style.left = e.x + "px";

  mouse2.style.top = e.y + "px";
  mouse2.style.left = e.x + "px"
  
});

//2eme code correction

/* //Ici on va cibler avec un querySelectorAll les 3span grâce à leur class
const mouses = document.querySelectorAll(".mouse");
console.log(mouses);
//On fait un forEach pour pouvoir dire pour chaque élément du tableau qui à les 3 span on va faire le code qui suis !
window.addEventListener("mousemove", (e) => {
  mouses.forEach((mouse) => {
    mouse.style.top = e.y + "px";
    mouse.style.left = e.x + "px";
  });
}); */
