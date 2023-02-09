//*Voici la commande du strict mode
"use strict";

//-Les Canvas-//
//! C'est un espace sur lequel on va pouvoir agir dessus

/* const canvas = document.getElementById("canvas");
//*grace au getContext on va pouvoir interagir avec lui
const ctx = canvas.getContext("2d");
//!Methode applicable grace ou getContext('2d')
ctx.fillStyle = "rgb(200,0,0)";
ctx.fillRect(10, 10, 50, 50);

ctx.fillStyle = "rgb(200,150,20, 0.5)";
//ctx.fillRect(axeX, axeY, tailleX, tailleY);
ctx.fillRect(100, 120, 50, 50);
ctx.clearRect(100, 12, 50, 100);

ctx.fillStyle = "rgb(100,10,200, 0.5)";
ctx.beginPath();
ctx.moveTo(100, 120)
ctx.lineTo(100, 120)
ctx.lineTo(100, 100)
ctx.fill() */

//-Try/Catch-//
try {
  //test un block de code
  maFunction();
} catch {
  //console.log(err);
}

function isValidJSON(txt) {
  try {
    JSON.parse(txt);
    return true;
  } catch {
    return false;
  }
}
console.log(isValidJSON());

try {
  //test un block de code
  maFunction();
} catch(err) {
  console.log(err);
} finally { //*Finally = quoi qu'il arrive tu affiche ça
  console.log("on est enfin au bout");
}

//!Throw
function isNumber(num) {
    if (isNaN(num)) {
        throw "not a number ! biacth"
    }else{
        console.log("c'est un nombre");
    }
    //Plein de code
}

try {
    isNumber("2d");    
}catch (err){
    console.log(err);
}

//-Le strict Mode-//
//Mode de javascript plus actuel au niveau des erreurs
//! exemple qui passe en javascript normal mais pas en strict mode car il manque le let ou le const
voiture = "bleu"

//-Import/Export-//


