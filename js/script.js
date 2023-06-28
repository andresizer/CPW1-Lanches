
// mudar mascote

let img = "img/mascot_images/mascote_sobre.png";
let shown_img = document.getElementById("mascote");

function change_mascot_click (src) {
    img = src;
    shown_img.src = img;
}

function change_mascot_on (src) {
    shown_img.src = src;
}

function change_mascot_out () {
    shown_img.src = img;
}

// --------------------------------------------------------------------------
// scroll cardapio

// xis
// Get references to the elements
const scrollToDivXis = document.getElementById('cont-itens-xis');
const targetDivXis = document.getElementById('xis-area');

// Add click event listener
scrollToDivXis.addEventListener('click', () => {
  // Scroll to the target div
  targetDivXis.scrollIntoView({ behavior: 'smooth' });
});

// --------------------------------------------------------------------------
// baurus
// Get references to the elements
const scrollToDivBauru = document.getElementById('cont-itens-bauru');
const targetDivBauru = document.getElementById('bauru-area');

// Add click event listener
scrollToDivBauru.addEventListener('click', () => {
  // Scroll to the target div
  targetDivBauru.scrollIntoView({ behavior: 'smooth' });
});

// --------------------------------------------------------------------------
// burgers
// Get references to the elements
const scrollToDivBurger = document.getElementById('cont-itens-burger');
const targetDivBurger = document.getElementById('burger-area');

// Add click event listener
scrollToDivBurger.addEventListener('click', () => {
  // Scroll to the target div
  targetDivBurger.scrollIntoView({ behavior: 'smooth' });
});

// --------------------------------------------------------------------------
// porcoes
// Get references to the elements
const scrollToDivPorcoes = document.getElementById('cont-itens-porcoes');
const targetDivPorcoes = document.getElementById('porcoes-area');

// Add click event listener
scrollToDivPorcoes.addEventListener('click', () => {
  // Scroll to the target div
  targetDivPorcoes.scrollIntoView({ behavior: 'smooth' });
});

// --------------------------------------------------------------------------
// refris
// Get references to the elements
const scrollToDivRefris = document.getElementById('cont-itens-refri');
const targetDivRefris = document.getElementById('refri-area');

// Add click event listener
scrollToDivRefris.addEventListener('click', () => {
  // Scroll to the target div
  targetDivRefris.scrollIntoView({ behavior: 'smooth' });
});

// --------------------------------------------------------------------------
// sucos
// Get references to the elements
const scrollToDivSucos = document.getElementById('cont-itens-suco');
const targetDivSucos = document.getElementById('suco-area');

// Add click event listener
scrollToDivSucos.addEventListener('click', () => {
  // Scroll to the target div
  targetDivSucos.scrollIntoView({ behavior: 'smooth' });
});

// --------------------------------------------------------------------------
// cervejas
// Get references to the elements
const scrollToDivCervejas = document.getElementById('cont-itens-cerveja');
const targetDivCervejas = document.getElementById('cerveja-area');

// Add click event listener
scrollToDivCervejas.addEventListener('click', () => {
  // Scroll to the target div
  targetDivCervejas.scrollIntoView({ behavior: 'smooth' });
});

// --------------------------------------------------------------------------
// drinks
// Get references to the elements
const scrollToDivDrinks = document.getElementById('cont-itens-drink');
const targetDivDrinks = document.getElementById('drink-area');

// Add click event listener
scrollToDivDrinks.addEventListener('click', () => {
  // Scroll to the target div
  targetDivDrinks.scrollIntoView({ behavior: 'smooth' });
});