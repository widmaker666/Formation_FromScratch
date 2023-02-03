//!https://www.themealdb.com/api/json/v1/1/search.php?s=tomato
//!https://api.blablagues.net/?rub=blagues
//!https://randomuser.me/api/?results=24

//XMLHttpRequest

/* function reqListener() {
  console.log(this.responseText);
}

let req = new XMLHttpRequest();

req.onload = reqListener;
req.open(
  "get",
  "https://www.themealdb.com/api/json/v1/1/search.php?s=tomato",
  true
);
req.send(); */

//*-------------------------------------------------
//!FETCH
/* fetch("le lien", "objet d'option")
  .then((response) => {
    console.log(response);
  })
  .catch((err) => console.log(err)); */

//fetch("data.txt").then((res) => res.text()).then((data) => console.log(data));
/* fetch("data.json")
  .then((res) => res.json())
  .then((data) => console.log(data)); */
//! on créer un objet init pour lui appliquer certaines options
const myHeaders = new Headers();

const init = {
  method: "GET", //*methode get sert à lire les données
  headers: myHeaders, //*myheaders pour parametrer nos headers
  mode: "cors", //* mode transmition qui gère les permissions de requêtes
  cache: "default",
};

/* fetch("data.json", init).then((res) => console.log(res)); */
//!CRUD = create(POST), read(GET), update(PUT), delete(DELETE)
//-methode pour incrémenter la base de donnée db.json
const init2 = {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  /* body: JSON.stringify({
    pseudo: "tomato",
    message: "c'est bon les tomates",
  }), */
  mode: "cors",
  credentials: "same-origin",
};

/* document.querySelector("form").addEventListener("submit", () => {
  fetch("http://localhost:3000/posts", init2).then(() => console.log("date"));
});  */

//-methode pour delete via l'ID
const init3 = {
  method: "DELETE",
  headers: {
    "Content-Type": "application/json",
  },
  mode: "cors",
  credentials: "same-origin",
};
document.querySelector("form").addEventListener("submit", () => {
  fetch("http://localhost:3000/posts/118", init3).then(() =>
    console.log("date")
  );
});

//! Asynchrone
setTimeout(() => {}, 2000);

//!promise c'est un fetch. Ce qui veut dire que le .then ne sera executé qu'une fois que le les données de lien seront récupérées

/* fetch("http://localhost:3000/posts/118").then((res) => res); */

//!Async await

async function fetchData() {
  await fetch("http://localhost:3000/posts/118");
  //-On attend que le await soit executé pour executé les code du dessus
  executeFunction();
}
//!Une fonction écrite comme ça le async ce mets là
const fetchData2 = async () => {
  await fetch("http://localhost:3000/posts/118");
  //-On attend que le await soit executé pour executé les code du dessus
  executeFunction();
};

//---------------------------------------------------------------
//!JSON
// Methode .json() => méthode qui s'auto-résoud en renvoyant le Body de la requête

fetch("data.json")
  .then((response) => response.json())
  .then((data) => {
    //*JSON.stringify(data) permet de convertir en json les données
    let setting = JSON.stringify(data);
    //* .parse => transforme json en objet js
    console.log(JSON.parse(setting));
  });

//---------------------------------------------------------------
//!WEB API
//CLIENT STORAGE => LocalStorage
//* le .data n'est que le nom de la variable qui va stocké les données
localStorage.data = "Allez vous faire mettre";
document.body.textContent = localStorage.maBoite;
localStorage.removeItem("maBoite");

//* Pour mettre un objet dans le local storage il faut passer par des chaine de caractères
const obj = {
  name: "zobette",
  age: 22,
};
//!On convertis en chaine de caractère puis on convertit en json pour afficher dans la console
localStorage.user = JSON.stringify(obj);
console.log(JSON.parse(localStorage.user));

//CLIENT STORAGE => SessionStorage permet de stocker uniquement pendant la session de l'utilisateur
sessionStorage.dataSetting = "55px";
sessionStorage.clear(); // pour supprimer les données de la session

//----------------------------------------------------------------
//!Cookies (s'arrête à la fin de la session sauf si on lui indique une date)
document.cookie = "username=tomato";
//Bonne pratique
document.cookie = "pseudo=FS;path=/;max-age=3600;secure";

