const slides = [
	{
		"image":"/assets/images/slideshow/slide1.jpg",
		"tagLine":"Impressions tous formats", // Le p TagLine a été séparé en deux pour la création du span tagLineSpan ci-dessous
		"tagLineSpan":"en boutique et en ligne" 
	},
	{
		"image":"/assets/images/slideshow/slide2.jpg",
		"tagLine":"Tirages haute définition grand format",
		"tagLineSpan":"pour vos bureaux et events"
	},
	{
		"image":"/assets/images/slideshow/slide3.jpg",
		"tagLine":"Grand choix de couleurs",
		"tagLineSpan":"de CMJN aux pantones"
	},
	{
		"image":"/assets/images/slideshow/slide4.png",
		"tagLine":"Autocollants",
		"tagLineSpan":"avec découpe laser sur mesure"
	}
]

const banner = slides[0];

const imageSlide = document.createElement("img"); 
imageSlide.className = "banner-img"; // insertion de la class dans la div img
imageSlide.src = banner.image; // indication de la source = l'img vient de l'array qui se trouve dans la constante slides

const tagLine = document.createElement("p"); 
tagLine.innerText = banner.tagLine;

const spanElement = document.createElement("span");
spanElement.innerText = banner.tagLineSpan;
tagLine.appendChild(spanElement); // Le span est rattaché directement à l'intérieur du paragraphe

const divDots = document.createElement("div");
divDots.className = "dots";

for (let i=0; i < slides.length; i++) { // dans cette boucle : i commence a partir de 0 ; lorsque i est moins grand que la quantité de slides la boucle continue de vérifier ; et elle rajoute un dot (i++) 
	const dotElement = document.createElement("div");
dotElement.className = "dot";
divDots.appendChild(dotElement); // Les dots sont rattachés directement à l'intérieur de la div dots
}

// Rattachement des éléments générés à la balise #banner
const divBanner = document.querySelector("#banner");
divBanner.appendChild(imageSlide);
divBanner.appendChild(tagLine);
divBanner.appendChild(divDots);

let arrowLeft = document.getElementById("arrow_left"); // evenements sur les flèches qui devront permettre de passer à la slide précédente ou suivante
arrowLeft.addEventListener("click", () => {
	console.log("ça fonctionne à gauche");
})

let arrowRight = document.getElementById("arrow_right");
arrowRight.addEventListener("click", () => {
	console.log("ça fonctionne à droite");
})
