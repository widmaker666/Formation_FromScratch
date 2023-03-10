//-Les Variables globales-//
const main = document.querySelector("main");
const basicArray = [
  { pic: 0, min: 1 },
  { pic: 1, min: 1 },
  { pic: 2, min: 1 },
  { pic: 3, min: 1 },
  { pic: 4, min: 1 },
  { pic: 5, min: 1 },
  { pic: 6, min: 1 },
  { pic: 7, min: 1 },
  { pic: 8, min: 1 },
  { pic: 9, min: 1 },
];
let exerciceArray = [];

//!Remplir le tableau avec local storage-//
() => {
  if (localStorage.exercice) {
    exerciceArray = localStorage.exercice;
  } else {
    exerciceArray = basicArray;
  }
};

class Exercice {
  constructor() {
    this.index = 0;
    this.minutes = exerciceArray[this.index].min;
    this.seconds = 0;
  }
  updateCountdwon() {
    return (main.innerHTML = `
    <div class="exercice-container">
      <p>${this.minutes} :${this.seconds}</p>
        <img src="./img/${exerciceArray[this.index].pic}.png" alt="exercice">
    <div>${this.index + 1}/${exerciceArray.length}</div>
    </div>`);
  }
}

const utils = {
  pageContent: function (title, content, btn) {
    document.querySelector("h1").innerHTML = title;
    main.innerHTML = content;
    document.querySelector(".btn-container").innerHTML = btn;
  },

  handleEventMinutes: function () {
    document.querySelectorAll('input[type="number"]').forEach((input) => {
      input.addEventListener("input", (e) => {
        exerciceArray.map((exo) => {
          if (exo.pic == parseInt(e.target.id)) {
            exo.min = e.target.value;
            this.store();
          }
        });
      });
    });
  },
  handleEventArrow: function () {
    document.querySelectorAll(".arrow").forEach((arrow) => {
      arrow.addEventListener("click", (e) => {
        let position = 0;
        exerciceArray.map((exo) => {
          if (exo.pic == e.target.dataset.pic && position !== 0) {
            [exerciceArray[position], exerciceArray[position - 1]] = [
              exerciceArray[position - 1],
              exerciceArray[position],
            ];
            page.lobby();
            this.store();
          } else {
            position++;
          }
        });
      });
    });
  },
  deleteItem: function () {
    document.querySelectorAll(".deleteBtn").forEach((btn) => {
      btn.addEventListener("click", (e) => {
        let newArr = [];
        exerciceArray.map((exo) => {
          if (exo.pic != e.target.dataset.pic) {
            newArr.push(exo);
          }
        });
        exerciceArray = newArr;
        page.lobby();
        this.store();
      });
    });
  },

  reboot: function () {
    exerciceArray = basicArray;
    page.lobby();
    this.store();
  },
  //*Fonction qui va stocker les modification du tableau dans la variable exercice
  store: function () {
    localStorage.exercice = JSON.stringify(exerciceArray);
  },
};

const page = {
  lobby: function () {
    let mapArray = exerciceArray
      .map(
        (exo) =>
          `
<li>
    <div class="card-header">
        <input type="number" id="${exo.pic}" min="1" max="10" value=${exo.min}>
        <span>min</span>
    </div>    
    <img src="./img/${exo.pic}.png">
    <i class="fas fa-arrow-alt-circle-left arrow" data-pic=${exo.pic}></i>
    <i class="fas fa-times-circle deleteBtn" data-pic=${exo.pic}></i>
</li>    
    `
      )
      .join("");

    utils.pageContent(
      "Param??trage <i id='reboot' class='fas fa-undo'></i>",
      "<ul>" + mapArray + "</ul>",

      "<button id='start'>Commencer<i class='far fa-play-circle'></i></button>"
    );
    utils.handleEventMinutes();
    utils.handleEventArrow();
    utils.deleteItem();
    reboot.addEventListener("click", () => utils.reboot());
    start.addEventListener("click", () => {
      this.routine();
    });
  },
  routine: function () {
    const exercice = new Exercice();
    utils.pageContent("Routine", exercice.updateCountdwon(), null);
  },
  finish: function () {
    utils.pageContent(
      "C'est termin??",
      "<button id='start'>Recommencer<i class='far fa-play-circle'></i></button>",
      "<button id='reboot' class='btn-reboot'>R??inintialiser <i class= 'fas fa-times-circle'></i></button>"
    );
  },
};

page.lobby();
