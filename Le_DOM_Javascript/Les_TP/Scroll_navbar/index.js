// Créer un événément au scroll

// Cacher la navbar si l'utilisateur commence à descendre et la sortir quand il remonte

// Stocker la valeur du précédent niveau de scroll pour savoir si l'on est monté ou descendu

// Connaitre niveau de scroll (window.scrollY)


let lastScroll = 0

window.addEventListener('scroll', () => {
  console.log(window.scrollY);
  if(window.scrollY < lastScroll) {
    navbar.style.top = 0;
  }else{
    navbar.style.top = "-60px";
  }
  /* A chaque fin de condition if rempli ou non on met à l'intérieur de lastScroll la valeur de cette condition */
  lastScroll = window.scrollY;
});

//code correction !
//
/* let lastScroll = 0;

window.addEventListener("scroll", (e) => {
  if (window.scrollY < lastScroll) {
    navbar.style.top = 0;
  } else {
    navbar.style.top = "-60px";
  }
  lastScroll = window.scrollY;
});
 */