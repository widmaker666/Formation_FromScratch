//*Convertir la date du jour
//New date égale à la date du jour, puis on mets au format toISO puis on split ce qui nous intéresse pas
const today = new Date().toISOString().split("T")[0];

//*start_date.value on prend la valeur dans la case start qui est maintenant egale à la variable today
start_date.value = today;

//*start_date.min veut dire qu'on ne peux pas revenir en arrière par rapport à la variable today
start_date.min = today;

//*Calculer la date de demain
let tomorrow = new Date();
tomorrow.setDate(tomorrow.getDate() + 1);

//*convertir format de tomorrow
let tomorrowFormat = tomorrow.toISOString().split("T")[0];
end_date.value = tomorrowFormat;
end_date.min = tomorrowFormat;

start_date.addEventListener("change", (e) => {
  let day = new Date(e.target.value);

  if (end_date.value < start_date.value) {
    day.getDate(day.getDate() + 1);
    end_date.value = day.toISOString().split("T")[0];
  }
});

end_date.addEventListener("change", (e) => {
  let day = new Date(e.target.value);

  if (end_date.value < start_date.value) {
    day.setDate(day.getDate() - 1);
    start_date.value = day.toISOString().split("T")[0];
  }
});

//*Calculer la nuitée totale

const bookingCalc = () => {
  let diffTime = Math.abs(
    new Date(end_date.value) - new Date(start_date.value)
  );
  let diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

  console.log(diffDays);

  //*Récupération du prix de la nuit dans le HTML avec le textContent
  totalPerNight.textContent = diffDays * nightPrice.textContent;
};

start_date.addEventListener("change", bookingCalc);
end_date.addEventListener("change", bookingCalc);

bookingCalc();
