const slides = [
  {
    image: "/assets/images/slideshow/slide1.jpg",
    tagLine: "Impressions tous formats", // Le p TagLine a été séparé en deux pour la création du span tagLineSpan ci-dessous
    tagLineSpan: "en boutique et en ligne",
  },
  {
    image: "/assets/images/slideshow/slide2.jpg",
    tagLine: "Tirages haute définition grand format",
    tagLineSpan: "pour vos bureaux et events",
  },
  {
    image: "/assets/images/slideshow/slide3.jpg",
    tagLine: "Grand choix de couleurs",
    tagLineSpan: "de CMJN aux pantones",
  },
  {
    image: "/assets/images/slideshow/slide4.png",
    tagLine: "Autocollants",
    tagLineSpan: "avec découpe laser sur mesure",
  },
];

const banner = slides[0];

let currentSlide = 0;

// l'indication des src de l'image et des innerText de la tagLine et du span dans les trois premiers const sont là pour que le premier slide fonctionne lors du chargement de la page. Les autres changent en fonction du défilement du slider avec les evenement ajoutés au flèches et au dots

const imageSlide = document.createElement("img");
imageSlide.className = "banner-img"; // insertion de la class dans la div img
imageSlide.src = banner.image; // indication de la source = l'img vient de l'array qui se trouve dans la constante slides
imageSlide.alt = "Banner Print-it";

const tagLine = document.createElement("p");
tagLine.innerText = banner.tagLine;

const spanElement = document.createElement("span");
spanElement.innerText = banner.tagLineSpan;
tagLine.appendChild(spanElement); // Le span est rattaché directement à l'intérieur du paragraphe

const divDots = document.createElement("div"); // création de la div qui reçoit les dots
divDots.className = "dots";

for (let i = 0; i < slides.length; i++) {
  // dans cette boucle : i represente l'indice et commence a partir de 0 ; lorsque i est moins grand que la quantité de slides la boucle continue de vérifier ; et passe au prochain objet de l'array (i++)
  const dotElement = document.createElement("div");
  dotElement.className = "dot";
  if (i === currentSlide) {
    // rajout d'une classe au dot si le dot a le même indice que le slide affiché
    dotElement.classList.add("dot_selected");
  }
  divDots.appendChild(dotElement); // Les dots sont rattachés directement à l'intérieur de la div dots

  dotElement.addEventListener("click", () => {
    currentSlide = [i]; // identification du slide et du dot
    updateSlide(); // appel à la fonction
  });
}

const arrowLeft = document.createElement("button"); // création du btn avec la flèche gauche avec un id
arrowLeft.id = "arrow_left";

const btnArrowLeft = document.createElement("img"); // définition de l'img qui va dans le bouton
btnArrowLeft.src = "/assets/images/arrow_left.png";
arrowLeft.appendChild(btnArrowLeft); // rattachement de l'image dans le bouton
arrowLeft.addEventListener("click", () => {
  // evenements sur les flèches qui devront permettre de passer à la slide précédente ou suivante
  currentSlide = (currentSlide - 1 + slides.length) % slides.length; // calcul de l'indice du slide précédent
  updateSlide(); // appel a une fonction
});

const arrowRight = document.createElement("button");
arrowRight.id = "arrow_right";

const btnArrowRight = document.createElement("img");
btnArrowRight.src = "/assets/images/arrow_right.png";
arrowRight.appendChild(btnArrowRight); // rattachement de l'image dans le bouton
arrowRight.addEventListener("click", () => {
  // evenements sur les flèches qui devront permettre de passer à la slide précédente ou suivante
  currentSlide = (currentSlide + 1) % slides.length;
  updateSlide();
});

function updateSlide() {
  const dots = document.querySelectorAll(".dot"); // selection des éléments avec la classe dot
  dots.forEach((dot) => dot.classList.remove("dot_selected")); // enleve la classe dot_selected a chaque fois que la fonction sera appelée, comme ça aucun dot aura cette apparence
  dots[currentSlide].classList.add("dot_selected"); // identification du dot qui correspond au slide et rajout de la classe dot_selected

  imageSlide.src = slides[currentSlide].image; // mise à jour de l'image, de la tagLine et du span correspondant au slide actuel
  tagLine.innerText = slides[currentSlide].tagLine;
  spanElement.innerText = slides[currentSlide].tagLineSpan;

  tagLine.appendChild(spanElement);
}

// Rattachement des éléments générés à la balise #banner
const divBanner = document.querySelector("#banner");
divBanner.appendChild(imageSlide);
divBanner.appendChild(tagLine);
divBanner.appendChild(divDots);
divBanner.appendChild(arrowLeft);
divBanner.appendChild(arrowRight);
