//*créer un formulaire pour taper les to do
//ajouter sur le dom ce qui est tapé dans l'input.value
//supprimer un to do qd on clique dessus .remove

//stocker dans le local storage
//consulster dans le local storage

const form = document.querySelector("form");

//*Fonction localStorge
function storeList() {
  window.localStorage.todoList = list.innerHTML;
}

function getTodos() {
  if (window.localStorage.todoList) {
    list.innerHTML = window.localStorage.todoList;
  } else {
    list.innerHTML = `<li>Cliquez sur un todo pour le supprimer</li>`;
  }
}

window.addEventListener("load", getTodos);


//*Creer un fonction submit pour créer une liste dans le formulaire
form.addEventListener("submit", (e) => {
  e.preventDefault();

  list.innerHTML += `<li>${item.value}</li>`;
  item.value = "";
  storeList();
});

//*Creer un evenement au click pour supprimer l'evenement
list.addEventListener("click", (e) => {
  e.target.classList.contains("checked")
    ? e.target.remove()
    : e.target.classList.add("checked");
  storeList();
});
