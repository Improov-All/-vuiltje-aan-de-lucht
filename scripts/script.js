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

// het volgende script zorgt er voor dat als je op de knop drukt met functie 'volgende_scherm', het huidige 'main' element wordt verborgen en de volgende wordt getoond. Zo wordt het een single page application, oftewel; geen serververzoeken en laadtijden! 
function scherm_1_naar_2(){
  document.getElementById('scherm_1').classList.add('hide');
  document.getElementById('scherm_2').classList.remove('hide');
  document.title = 'Vuiltje a.d. Lucht - Start met meten';
  document.getElementById('scherm_2').classList.add('show');
 }

 function scherm_2_naar_3(){
  document.getElementById('scherm_2').classList.remove('show');
  document.getElementById('scherm_2').classList.add('hide');
  document.getElementById('scherm_3').classList.remove('hide');
  document.title = 'Vuiltje a.d. Lucht - Meetwaarden';
  document.getElementById('scherm_3').classList.add('show');
 }

 function scherm_3_naar_4(){
  document.getElementById('scherm_3').classList.remove('show');
  document.getElementById('scherm_3').classList.add('hide');
  document.getElementById('scherm_4').classList.remove('hide');
  document.title = 'Vuiltje a.d. Lucht - Wil je meer info of direct naar oplossingen?';
  document.getElementById('scherm_4').classList.add('show');
 }

 function scherm_4_naar_5(){
  document.getElementById('scherm_4').classList.remove('show');
  document.getElementById('scherm_4').classList.add('hide');
  document.getElementById('scherm_5').classList.remove('hide');
  document.title = 'Vuiltje a.d. Lucht - Wat voor installatie heb je?';
  document.getElementById('scherm_5').classList.add('show');
 }

 function scherm_5_naar_6(){
  document.getElementById('scherm_5').classList.remove('show');
  document.getElementById('scherm_5').classList.add('hide');
  document.getElementById('scherm_6').classList.remove('hide');
  document.title = 'Vuiltje a.d. Lucht - Oplossingen';
  document.getElementById('scherm_6').classList.add('show');
 }


// Bootstrap tooltips inschakelen: 
$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})