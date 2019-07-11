// CENSURATORE
// - Il software riceve in input un lungo testo e una serie di parole da censurare.
// - Restituisce il testo con xxx al posto delle parole censurate.
// - Stampa un “badword index” calcolato come il numero di parole
// censurate su il numero di parole totali
//
// *NOTE=* il nostro censuratore, diventa una funzione che accetterà
// due argomenti:   “testo” e “paroleproibite”.
// se non vi viene immediato il farlo con una funzione, prima fate
// funzionare lo script e poi vi preoccupate della questione “farlo diventare una funzione!



// dichiaro var - array testo e array paroleproibite
var txt = prompt('inserisci un testo');
var parole = prompt('inserisci le parole proibite')
var testo = [];    //['prova', 'di', ' lungo', 'testo'];
var paroleproibite = [];


testo.push(txt.split(' ,'));
paroleproibite.push(parole.split(','));
// imposto ricerca parole con confronto elementi array


// per ogni elemento di testo
      //

      // per ogni elemento di paroleproibite
      //  se ==
      //   stampa xxx
      //
      //
      //  altrimenti
      //     stampa elemento di testo

function censura(text, words){
  // words = ['serie', 'di', 'parole', 'da', 'censurare'];
  for (var i = 0; i < text.length; i++) {

    for (var j = 0; j < words.length; j++) {

      if (text[i] === words[j]){

        text[i] = 'xxx';



      }







    }
    return text[i];
  }

}



// console.log(testo);

testo.join(' ');
paroleproibite.join(' ');
console.log('questi sono gli array che ho inserito' , testo, parole);
console.log(censura(txt, parole));
