// 5 - Récupérer ce qui est tapé dans l'input et filtrer (avant le map) les données
/* country.name.includes(inputSearch.value); */

// 6 - Avec la méthode Slice gérer le nombre de pays affichés (inputRange.value)

// 7 - Gérer les 3 boutons pour trier (méthode sort()) les pays
//*Les constantes*
let tab1 = [];
let sortMethod = "maxToMin";
const btnSort = document.querySelectorAll(".btnSort"); //-On regroupe tous les boutons pour leurs appliquer la methode forEach faire un addeventlistner
const countriesContainer = document.querySelector(".countries-container");

//-Les Fonctions-//
//*Fonction pour avoir la data de l'api
async function fetchCountries() {
  await fetch("https://restcountries.com/v3.1/all")
    .then((res) => res.json())
    .then((data) => (tab1 = data));
  displayPays();
}

//*Afficher pays

const displayPays = () => {
  countriesContainer.innerHTML = tab1
    .filter((country) =>
      country.translations.fra.common
        .toLowerCase()
        .includes(inputSearch.value.toLowerCase())
    )
    .sort((a, b) => {
      if (sortMethod === "maxToMin") {
        return b.population - a.population;
      } else if (sortMethod === "minToMax") {
        return a.population - b.population;
      } else if (sortMethod === "alpha") {
        return a.translations.fra.common.localeCompare(
          b.translations.fra.common
        );
      }
    })
    .slice(0, inputRange.value)
    .map(
      (pays) => `
<div class="card">
<img src="${pays.flags.svg}" height = 150px alt="${pays.flags.alt}"><br>
<h2>${pays.translations.fra.common}</h2>
<h4>${pays.capital}</h4>
<p>${pays.population.toLocaleString()}</p><br>
</div><br>

`
    )
    .join("");
};

//!Il faut jour un window.addEventListener("load", fetchCountries) de la fonction car sinon on ne peut pas voir les résultats à cause du async wait;
window.addEventListener("load", fetchCountries); //*OBLIGATOIRE POUR LES ASYNC WAITS*//
inputSearch.addEventListener("input", displayPays);

//-Methode pour faire une barre range avec la valeur qui s'affiche
inputRange.addEventListener("input", () => {
  displayPays();
  rangeValue.textContent = inputRange.value;
});

btnSort.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    sortMethod = e.target.id;
    displayPays();
  });
});
