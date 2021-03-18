// First we get the viewport height and we multiple it by 1% to get a value for a vh unit
let vh = window.innerHeight * 0.01;
// Then we set the value in the --vh custom property to the root of the document
document.documentElement.style.setProperty('--vh', `${vh}px`);

// We listen to the resize event
window.addEventListener('resize', () => {
  // We execute the same script as before
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
});

// // script om carousels los van elkaar te laten werken:
// $(document).ready(function(){
// 	$('#carousel-1').carousel();
// 	$('#maatregel_2').carousel();
// })


// het volgende script zorgt er voor dat als je op de knop drukt met functie 'volgende_scherm', het huidige 'main' element wordt verborgen en de volgende wordt getoond. Zo wordt het een single page application, oftewel; geen serververzoeken en laadtijden! 
function volgende_scherm(){
  document.getElementById('scherm_1').classList.add('hide');
  document.getElementById('scherm_2').classList.remove('hide');
  document.title = 'Vuiltje a.d. Lucht - Start met meten';
  document.getElementById('scherm_2').classList.add('show');
 }