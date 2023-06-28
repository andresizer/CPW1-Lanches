let scrollToDivXis = document.getElementById('cont-itens-xis');
let targetDivXis = document.getElementById('xis-area');
let scrollToDivBauru = document.getElementById('cont-itens-bauru');
let targetDivBauru = document.getElementById('bauru-area');
let scrollToDivBurger = document.getElementById('cont-itens-burger');
let targetDivBurger = document.getElementById('burger-area');
let scrollToDivPorcoes = document.getElementById('cont-itens-porcoes');
let targetDivPorcoes = document.getElementById('porcoes-area');
let scrollToDivRefris = document.getElementById('cont-itens-refri');
let targetDivRefris = document.getElementById('refri-area');
let scrollToDivSucos = document.getElementById('cont-itens-suco');
let targetDivSucos = document.getElementById('suco-area');
let scrollToDivCervejas = document.getElementById('cont-itens-cerveja');
let targetDivCervejas = document.getElementById('cerveja-area');
let scrollToDivDrinks = document.getElementById('cont-itens-drink');
let targetDivDrinks = document.getElementById('drink-area');

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
// funcao para rolar a tela no cardapio considerando a area do logo no topo

// let getOffsetTop = function (elem) {

// 	// Set our distance placeholder
// 	let distance = 0;

// 	// Loop up the DOM
// 	if (elem.offsetParent) {
// 		do {
// 			distance += elem.offsetTop;
// 			elem = elem.offsetParent;
// 		} while (elem);
// 	}

//   let fixedDivHeight = document.getElementById('logo').offsetHeight;

//   distance = distance - fixedDivHeight;

// 	// Return our distance
// 	return distance < 0 ? 0 : distance;
// };

// --------------------------------------------------------------------------
// scroll cardapio

// xis
// Get references to the elements


// let offsetXis = getOffsetTop(targetDivXis);

// Add click event listener
scrollToDivXis.addEventListener('click', () => {

  // targetDivXis.scrollIntoView({ behavior: 'smooth' });
  
  targetDivXis.classList.add('itensCardapioAtivo');
  targetDivXis.classList.remove('itensCardapioInv');

  targetDivBauru.classList.add('itensCardapioInv');
  targetDivBauru.classList.remove('itensCardapioAtivo');
  targetDivBurger.classList.add('itensCardapioInv');
  targetDivBurger.classList.remove('itensCardapioAtivo');
  targetDivPorcoes.classList.add('itensCardapioInv');
  targetDivPorcoes.classList.remove('itensCardapioAtivo');
  targetDivRefris.classList.add('itensCardapioInv');
  targetDivRefris.classList.remove('itensCardapioAtivo');
  targetDivSucos.classList.add('itensCardapioInv');
  targetDivSucos.classList.remove('itensCardapioAtivo');
  targetDivDrinks.classList.add('itensCardapioInv');
  targetDivDrinks.classList.remove('itensCardapioAtivo');
  targetDivCervejas.classList.add('itensCardapioInv');
  targetDivCervejas.classList.remove('itensCardapioAtivo');
  
  // window.scrollTo({
  //   top: offsetXis,
  //   behavior: 'smooth'
  // });
  
});

// --------------------------------------------------------------------------
// baurus
// Get references to the elements


// let offsetBauru = getOffsetTop(targetDivBauru);

// Add click event listener
scrollToDivBauru.addEventListener('click', () => {
  

  targetDivBauru.classList.add('itensCardapioAtivo');
  targetDivBauru.classList.remove('itensCardapioInv');

  targetDivXis.classList.add('itensCardapioInv');
  targetDivXis.classList.remove('itensCardapioAtivo');
  targetDivBurger.classList.add('itensCardapioInv');
  targetDivBurger.classList.remove('itensCardapioAtivo');
  targetDivPorcoes.classList.add('itensCardapioInv');
  targetDivPorcoes.classList.remove('itensCardapioAtivo');
  targetDivRefris.classList.add('itensCardapioInv');
  targetDivRefris.classList.remove('itensCardapioAtivo');
  targetDivSucos.classList.add('itensCardapioInv');
  targetDivSucos.classList.remove('itensCardapioAtivo');
  targetDivDrinks.classList.add('itensCardapioInv');
  targetDivDrinks.classList.remove('itensCardapioAtivo');
  targetDivCervejas.classList.add('itensCardapioInv');
  targetDivCervejas.classList.remove('itensCardapioAtivo');


  // window.scrollTo({
  //   top: offsetBauru,
  //   behavior: 'smooth'
  // });
  
});

// --------------------------------------------------------------------------
// burgers
// Get references to the elements


// let offsetBurger = getOffsetTop(targetDivBurger);

// Add click event listener
scrollToDivBurger.addEventListener('click', () => {
  
  targetDivBurger.classList.add('itensCardapioAtivo');
  targetDivBurger.classList.remove('itensCardapioInv');

  targetDivXis.classList.add('itensCardapioInv');
  targetDivXis.classList.remove('itensCardapioAtivo');
  targetDivBauru.classList.add('itensCardapioInv');
  targetDivBauru.classList.remove('itensCardapioAtivo');
  targetDivPorcoes.classList.add('itensCardapioInv');
  targetDivPorcoes.classList.remove('itensCardapioAtivo');
  targetDivRefris.classList.add('itensCardapioInv');
  targetDivRefris.classList.remove('itensCardapioAtivo');
  targetDivSucos.classList.add('itensCardapioInv');
  targetDivSucos.classList.remove('itensCardapioAtivo');
  targetDivDrinks.classList.add('itensCardapioInv');
  targetDivDrinks.classList.remove('itensCardapioAtivo');
  targetDivCervejas.classList.add('itensCardapioInv');
  targetDivCervejas.classList.remove('itensCardapioAtivo');

  // window.scrollTo({
  //   top: offsetBurger,
  //   behavior: 'smooth'
  // });
  
});

// --------------------------------------------------------------------------
// porcoes
// Get references to the elements


// let offsetPorcoes = getOffsetTop(targetDivPorcoes);

// Add click event listener
scrollToDivPorcoes.addEventListener('click', () => {
  
  targetDivPorcoes.classList.add('itensCardapioAtivo');
  targetDivPorcoes.classList.remove('itensCardapioInv');

  targetDivXis.classList.add('itensCardapioInv');
  targetDivXis.classList.remove('itensCardapioAtivo');
  targetDivBurger.classList.add('itensCardapioInv');
  targetDivBurger.classList.remove('itensCardapioAtivo');
  targetDivBauru.classList.add('itensCardapioInv');
  targetDivBauru.classList.remove('itensCardapioAtivo');
  targetDivRefris.classList.add('itensCardapioInv');
  targetDivRefris.classList.remove('itensCardapioAtivo');
  targetDivSucos.classList.add('itensCardapioInv');
  targetDivSucos.classList.remove('itensCardapioAtivo');
  targetDivDrinks.classList.add('itensCardapioInv');
  targetDivDrinks.classList.remove('itensCardapioAtivo');
  targetDivCervejas.classList.add('itensCardapioInv');
  targetDivCervejas.classList.remove('itensCardapioAtivo');

  // window.scrollTo({
  //   top: offsetPorcoes,
  //   behavior: 'smooth'
  // });
  
});

// --------------------------------------------------------------------------
// refris
// Get references to the elements


// let offsetRefris = getOffsetTop(targetDivRefris);

// Add click event listener
scrollToDivRefris.addEventListener('click', () => {
  
  targetDivRefris.classList.add('itensCardapioAtivo');
  targetDivRefris.classList.remove('itensCardapioInv');

  targetDivXis.classList.add('itensCardapioInv');
  targetDivXis.classList.remove('itensCardapioAtivo');
  targetDivBurger.classList.add('itensCardapioInv');
  targetDivBurger.classList.remove('itensCardapioAtivo');
  targetDivPorcoes.classList.add('itensCardapioInv');
  targetDivPorcoes.classList.remove('itensCardapioAtivo');
  targetDivBauru.classList.add('itensCardapioInv');
  targetDivBauru.classList.remove('itensCardapioAtivo');
  targetDivSucos.classList.add('itensCardapioInv');
  targetDivSucos.classList.remove('itensCardapioAtivo');
  targetDivDrinks.classList.add('itensCardapioInv');
  targetDivDrinks.classList.remove('itensCardapioAtivo');
  targetDivCervejas.classList.add('itensCardapioInv');
  targetDivCervejas.classList.remove('itensCardapioAtivo');

  // window.scrollTo({
  //   top: offsetRefris,
  //   behavior: 'smooth'
  // });
  
});

// --------------------------------------------------------------------------
// sucos
// Get references to the elements


// let offsetSucos = getOffsetTop(targetDivSucos);

// Add click event listener
scrollToDivSucos.addEventListener('click', () => {
  
  targetDivSucos.classList.add('itensCardapioAtivo');
  targetDivSucos.classList.remove('itensCardapioInv');

  targetDivXis.classList.add('itensCardapioInv');
  targetDivXis.classList.remove('itensCardapioAtivo');
  targetDivBurger.classList.add('itensCardapioInv');
  targetDivBurger.classList.remove('itensCardapioAtivo');
  targetDivPorcoes.classList.add('itensCardapioInv');
  targetDivPorcoes.classList.remove('itensCardapioAtivo');
  targetDivRefris.classList.add('itensCardapioInv');
  targetDivRefris.classList.remove('itensCardapioAtivo');
  targetDivBauru.classList.add('itensCardapioInv');
  targetDivBauru.classList.remove('itensCardapioAtivo');
  targetDivDrinks.classList.add('itensCardapioInv');
  targetDivDrinks.classList.remove('itensCardapioAtivo');
  targetDivCervejas.classList.add('itensCardapioInv');
  targetDivCervejas.classList.remove('itensCardapioAtivo');

  // window.scrollTo({
  //   top: offsetSucos,
  //   behavior: 'smooth'
  // });
  
});

// --------------------------------------------------------------------------
// cervejas
// Get references to the elements


// let offsetCervejas = getOffsetTop(targetDivCervejas);

// Add click event listener
scrollToDivCervejas.addEventListener('click', () => {
  
  targetDivCervejas.classList.add('itensCardapioAtivo');
  targetDivCervejas.classList.remove('itensCardapioInv');

  targetDivXis.classList.add('itensCardapioInv');
  targetDivXis.classList.remove('itensCardapioAtivo');
  targetDivBurger.classList.add('itensCardapioInv');
  targetDivBurger.classList.remove('itensCardapioAtivo');
  targetDivPorcoes.classList.add('itensCardapioInv');
  targetDivPorcoes.classList.remove('itensCardapioAtivo');
  targetDivRefris.classList.add('itensCardapioInv');
  targetDivRefris.classList.remove('itensCardapioAtivo');
  targetDivSucos.classList.add('itensCardapioInv');
  targetDivSucos.classList.remove('itensCardapioAtivo');
  targetDivDrinks.classList.add('itensCardapioInv');
  targetDivDrinks.classList.remove('itensCardapioAtivo');
  targetDivBauru.classList.add('itensCardapioInv');
  targetDivBauru.classList.remove('itensCardapioAtivo');
  // window.scrollTo({
  //   top: offsetCervejas,
  //   behavior: 'smooth'
  // });
  
});

// --------------------------------------------------------------------------
// drinks
// Get references to the elements


// let offsetDrinks = getOffsetTop(targetDivDrinks);

// Add click event listener
scrollToDivDrinks.addEventListener('click', () => {
  
  targetDivDrinks.classList.add('itensCardapioAtivo');
  targetDivDrinks.classList.remove('itensCardapioInv');

  targetDivXis.classList.add('itensCardapioInv');
  targetDivXis.classList.remove('itensCardapioAtivo');
  targetDivBurger.classList.add('itensCardapioInv');
  targetDivBurger.classList.remove('itensCardapioAtivo');
  targetDivPorcoes.classList.add('itensCardapioInv');
  targetDivPorcoes.classList.remove('itensCardapioAtivo');
  targetDivRefris.classList.add('itensCardapioInv');
  targetDivRefris.classList.remove('itensCardapioAtivo');
  targetDivBauru.classList.add('itensCardapioInv');
  targetDivBauru.classList.remove('itensCardapioAtivo');
  targetDivSucos.classList.add('itensCardapioInv');
  targetDivSucos.classList.remove('itensCardapioAtivo');
  targetDivCervejas.classList.add('itensCardapioInv');
  targetDivCervejas.classList.remove('itensCardapioAtivo');

  // window.scrollTo({
  //   top: offsetDrinks,
  //   behavior: 'smooth'
  // });
  
});