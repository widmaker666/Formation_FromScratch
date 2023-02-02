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

//*-------------------------------------------------*//
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
//*methode pour incrémenter la base de donnée db.json
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

//*methode pour delete via l'ID
const init3 = {
  method: "DELETE",
  headers: {
    "Content-Type": "application/json",
  },  
  mode: "cors",
  credentials: "same-origin",
};
document.querySelector("form").addEventListener("submit", () => {
  fetch("http://localhost:3000/posts/118", init3).then(() => console.log("date"));
});