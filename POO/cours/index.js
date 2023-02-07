//!Rappel objets JS :
//-Toujours un index: "valeur"
const obj = {
  pseudo: "guaguelle",
  ville: "perouge",

  direBonjour() {
    console.log("bonjour :" + this.pseudo); //*Le This permet de se servir des éléments dans l'objet donc this.ville ou .pseudo ou .index
  },
};
console.log(obj.direBonjour());
//!ajouter dans un objet
obj.age = 24;

//ou
obj["admin"] = true; //*Grace à cette méthode on peut faire de la concaténation

//!Modifier
obj.pseudo += "zboubinou";

//!Supprimer dans un objet avec delete
/* delete obj.ville; */

//!Vérifier si il y a une propriété dans l'obj
/* console.log("pseudo" in obj);
console.log("age" in obj); */

//!Parcourir un objet
//-Grâce a cette methode de for on list tous les index à l'intérieur de l'obj
/* for (const key in obj) {
  console.log(key);
} */
//-Ici on va chercher dans obj et on utilise les crochets + le key qui lui parcours les valeur à l'intérieur de l'objet
for (const key in obj) {
  //console.log(key + " : " + obj[key]);
}

//!Obtenir les index des objets (Object.keys)

const keys = Object.keys(obj);
//console.log(keys);

//!Obtenir les valeurs des objets (Object.values)

const valeurs = Object.values(obj);
//console.log(valeurs);

//! Obtenir un tableau des objets (Object.entries)
const entriesArray = Object.entries(obj);
//console.log(entriesArray);

//!Fusionner des objets (Object.assign)
const obj2 = {
  taille: "1m85",
  poids: "250kg",
};
const fusion = Object.assign({}, obj, obj2);
//console.log(fusion);

//!Empecher le modification sur les parametres (Object.freeze)
//!-Empecher le modification sur les propriétés (Object.seal)
const newObj = Object.freeze(obj);
newObj.pseudo += "zazaLaRace"; //*Impossible de l'insérer dans l'objet car le freeze bloque l'ajout
//console.log(newObj);

//-Constructeur d'objet-//

//!Fonction constructeur d'objet
function User(pseudo, ville) {
  this.pseudo = pseudo;
  this.ville = ville;

  this.getCity = function () {
    console.log(this.pseudo + " habite sur " + this.ville);
  };
}

const user1 = new User("Buu Buu", "terre");
const user2 = new User("Satan petit Cum", "Namek");
console.log(user1.getCity(), user2.getCity());

//!Factory functions
function User3(pseudo, ville) {
  return {
    pseudo,
    ville,
  };
}
const user4 = User3("Kaio", "l'autre-monde");
console.log(user4);

//-Les Classes-//
class Utilisateur {
  constructor(pseudo, ville) {
    this.pseudo = pseudo;
    this.ville = ville;
  }
  sayMyName = function () {
    console.log("Tu t'appel " + this.pseudo);
  };
}

const user5 = new Utilisateur("Dabla", "l'enfer");
//*On peut ajouter une fonction grace à .prototype (Le faite de les mettres dans prototype fera qu'elle seront plus rapide les méthodes)
Utilisateur.prototype.sayCity = function () {
  console.log("J'habite dans " + this.ville);
};

Object.assign(Utilisateur.prototype, {
  methode1() {},
  methode2() {},
});
console.log(user5);

//-Les Héritages-//

class Animal {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  saySomething(text) {
    console.log("C'est un " + this.name + " qui dit : " + text);
  }
}
const animal1 = new Animal("dog", 52);
console.log(
  animal1.saySomething(
    "bonjour je me ferais bien rape le fion par Babidi non ?"
  )
);

//!Héritage grâce à extends
class Dog extends Animal {
  run() {
    console.log("Babidi aime déssosser les Dogs");
  }
}

const rintintin = new Dog("Rintintin", 10);
console.log(rintintin.run())

//-FIN-//