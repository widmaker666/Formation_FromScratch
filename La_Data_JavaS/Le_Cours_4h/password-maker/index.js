const dataLowercase = "azertyuiopmlkjhgfdsqwxcvbn";
const dataUppercase = dataLowercase.toUpperCase();
const dataNumbers = "1234567890";
const dataSymbols = "~!@#$%^&*()_+-=[]{}|;':\",./<>";
const rangeValue = document.getElementById("password-length");
const passwordOutput = document.getElementById("password-output");

/* Javascript récupère automatiquement les id du html sans faire un getelementbyid */

const generatePassword = () => {
  let data = [];
  let password = "";
  /* Le spread operateur (...) permettent de casser les tableaux ce qui ferait : [a, z, e, r, t, , &, " , (, 8 , 7 , 9 , .....] */
  lowercase.checked ? data.push(...dataLowercase) : [];
  uppercase.checked ? data.push(...dataUppercase) : [];
  symbols.checked ? data.push(...dataSymbols) : [];
  numbers.checked ? data.push(...dataNumbers) : [];

  /* Ici on utilise un ternaire pour dire si on ne choisi aucune checked box ça nous affiche un message alert pour nous dire de choisir une checkbox */
  data.length === 0
    ? alert("Veuillez sélectionner au moins un caractère")
    : null;

  /* Boucle for pour énumérer le nombre de fois qu'on lui demande grace au rangeValue */
  for (let i = 0; i < rangeValue.value; i++) {
    /* On utilise cette méthode pour faire au hasard dans le tableau data */
    password += data[Math.floor(Math.random() * data.length)];
  }

  /* Pour mettre la valeur dans l'input on ne fait pas de innerHTML ou de textContent on fait un .VALUE */
  passwordOutput.value = password;

  /* PasswordOutpu.select() permet de selectionner la valeur du mot de passe automatiquement */
  passwordOutput.select();
  /* Ici c'est la commande qui te permet de faire le Ctrl + c automatique */
  navigator.clipboard.writeText(passwordOutput.value);

  generateButton.textContent = " MDP Copié !";

  /* SetTimeout veux dire : la fonction fléché c'est qu'est ce que tu fait et le nombre c'est dans combien de temps tu le fais */
  setTimeout(() => {
    generateButton.textContent = " Générer MDP";
  }, 2000);
};
generateButton.addEventListener("click", () => {
  generatePassword();
});
