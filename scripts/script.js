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

// functie om te checken of een optie geselecteerd is. 
// Als niet: Weergave tooltip. 
// Als wel: opslaan keuze & doorgaan naar volgende scherm.
// const btn = document.querySelector('#button_situatie');
//         // handle click button
//         btn.onclick = function () {
//             const rbs = document.querySelectorAll('input[name="situatie"]');
//             let selectedValue;
//             for (const rb of rbs) {
//                 if (rb.checked) {
//                     selectedValue = rb.value;
//                     break;
//                 }
//                 // else alert("Selecteer een optie")
//                 // break;
//             }
//             if (selectedValue == "Hoge_Co2") {
//             scherm_3_naar_4();
//             document.getElementById('maatregel_luchtreiniger').classList.add('hide');
//             }
//             else scherm_3_naar_4();
//         };

function resetAll(){
  document.getElementById('maatregel_luchtreiniger').classList.remove('hide');
  }

function hideLuchtreiniger(){
 document.getElementById('maatregel_luchtreiniger').classList.add('hide');
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
  document.title = 'Vuiltje a.d. Lucht - Handelingen';
  document.getElementById('scherm_6').classList.add('show');
 }

 function scherm_6_naar_7(){
  document.getElementById('scherm_6').classList.remove('show');
  document.getElementById('scherm_6').classList.add('hide');
  document.getElementById('scherm_7').classList.remove('hide');
  document.title = 'Vuiltje a.d. Lucht - Installaties';
  document.getElementById('scherm_7').classList.add('show');
 }

 function scherm_7_naar_6(){
  document.getElementById('scherm_7').classList.remove('show');
  document.getElementById('scherm_7').classList.add('hide');
  document.getElementById('scherm_6').classList.remove('hide');
  document.title = 'Vuiltje a.d. Lucht - Handelingen';
  document.getElementById('scherm_6').classList.add('show');
 }




// Bootstrap tooltips inschakelen: 
$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})