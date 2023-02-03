//!https://randomuser.me/api/?results=24
let userData = [];

const fetchUser = async () => {
  await fetch("https://randomuser.me/api/?results=24")
    .then((res) => res.json())
    .then((data) => (userData = data.results));
  console.log(userData);
};
//----------------------------------------------------------------
//!Methode pour passer la date ecrite en toISO, au format français
const dateParse = (date) => {
  let newDate = new Date(date).toLocaleDateString("fr-FR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  //*ne pas oublier de faire return newDate pour avoir le résultat
  return newDate;
};

//! Création d'un function TODAY pour avoir la date du jour
const dayToday = (date) => {
  let today = new Date();
  let todayT = Date.parse(today);
  let timestamp = Date.parse(date);

  return Math.ceil((todayT - timestamp) / 8.64e7);
};
//------------------------------------------------------------
//! (Async) avant de faire le .map j'aimerais que tu attende de recevoir les données du fetchUser grâce au (await)
const userDisplay = async () => {
  await fetchUser();
  //*.map te dit pour tous les prénoms tu me fais un h3 et tu affiche sur le document
  document.body.innerHTML = userData
    .map(
      (user) => `<div class="card">
      <img src=${user.picture.large} alt="photo de ${user.name.last}">
    <h3>${user.name.first} ${user.name.last}</h3>
    <p>${user.location.city}, ${dateParse(user.dob.date)}</p>
    <em>Membre depuis : ${dayToday(user.registered.date)} jours</em>
    </div>`
    )
    .join(" ");
};
userDisplay();

