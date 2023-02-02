//API = https://api.blablagues.net/?rub=blagues

const header = document.getElementById("header");
const content = document.getElementById("content");

function getJoke() {
  fetch("https://api.blablagues.net/?rub=blagues")
    .then((res) => res.json())
    .then((data) => {
      let jokes = data.data.content;
      console.log(jokes.text_head);

      header.textContent = jokes.text_head;
      content.textContent = jokes.text !== "" ? jokes.text : jokes.text_hidden;
    });
}

document.body.addEventListener("click", () => {
  getJoke();
});
//! ou on peut écrire : document.body.addEventListener("click", getJoke);
