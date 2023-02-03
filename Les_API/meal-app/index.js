//!https://www.themealdb.com/api/json/v1/1/search.php?s=tomato (API)

//----------------------------------------------------------------
const result = document.getElementById("result");
const form = document.querySelector("form");
const input = document.querySelector("input");
let meals = [];

const fmeals = async (search) => {
  await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
    .then((response) => response.json())
    .then((data) => (meals = data.meals));
};

//-Fonction affichage des plats
function mealsDisplay() {
  if (meals === null) {
    result.innerHTML = "<h2>Aucun résultat</h2>";
  } else {
    meals.length = 12;

    result.innerHTML = meals
      .map((meal) => {
        let ingredients = [];

        for (let i = 1; i < 21; i++) {
          if (meal[`strIngredient${i}`]) {
            let ingredient = meal[`strIngredient${i}`];
            let mesure = meal[`strMeasure${i}`];

            ingredients.push("<li>" + ingredient + " - " + mesure + "</li>");
          }
        }

        return `<li class="card">
      <h2>${meal.strMeal}</h2>
      <p>${meal.strArea}</p>
      <img src="${meal.strMealThumb}" alt="of ${meal.strMeal}"/>
      <ul>
      ${ingredients.join("")}
     
      </ul>

      </li>
  `;
      })
      .join("");
  }
}

input.addEventListener("input", (e) => {
  fmeals(e.target.value); //* en ajoutant .mealsDisplay() on peut faire en sorte d'afficher à chaque lettre les recettes
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  mealsDisplay();
});
