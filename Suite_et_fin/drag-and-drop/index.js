let item;

//*Autorise l'élément à etre pris
document.addEventListener("dragstart", (e) => {
  item = e.target;
});
//*Nous autorise à bouger une fois l'élement pris
document.addEventListener("dragover", (e) => {
  e.preventDefault();
});
//*quand on relache l'evenement
document.addEventListener("drop", (e) => {
  if (e.target.getAttribute("data-draggable") == "target") {
    e.preventDefault(e);
    e.target.appendChild(item);
  }
});

document.addEventListener("dragend", () => (item = null));
