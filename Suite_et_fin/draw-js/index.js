const canvas = document.getElementById("art");
const ctx = canvas.getContext("2d");

function getMousePos(e) {
  //!On recupère le dimension du rectangle du canvas
  const rect = canvas.getBoundingClientRect();

  return {
    x: e.clientX - rect.left,
    y: e.clientY - rect.top,
  };
}
function mouseMove(e) {
  const mousePos = getMousePos(e);
  //Où est le curseur
  ctx.lineTo(mousePos.x, mousePos.y);
  //Dessiner ligne
  ctx.stroke();
  //couleur
  ctx.strokeStyle = "darkgreen";
  //taille ligne
  ctx.lineWidth = 10;
}

canvas.addEventListener("mousedown", (e) => {
  e.preventDefault();

  const mousePos = getMousePos(e);
  ctx.beginPath();
  ctx.moveTo(mousePos.x, mousePos.y);

  canvas.addEventListener("mousemove", mouseMove);
  canvas.addEventListener("mouseup", () => {
    canvas.removeEventListener("mousemove", mouseMove);
  });
});

//!Bouton reset
reset.addEventListener("click", () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
});
