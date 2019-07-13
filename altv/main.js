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

//  provare a sviluppare tutti i controlli che possono venirvi in mente, provando a fare il PowerUser o UtenteStronzo (in italiano).
// Esempi che abbiam preso in considerazione:
// - se c’è punteggiatura nel testo?
// - se c’è differenza di maiuscole-minuscole?
// - se l’utente non mette del testo?
// - etc. ect.



function censura(text, words){   // funzione che riceve due stringhe come argomenti
                                      // restituisce stringa censored e num parole censored
                                      //  controllo di maiuscole/minuscole
                                      //  provo a controllare la punteggiatura con regexpr MA non torna il testo punteggiato

  var cont = 0;

  var w = words.toUpperCase();
  var arrText = text.split(/[  .,?!'']+/);
  var arrWords = w.split(' ');

  console.log(' nella funzione gli array',arrText, arrWords);
  for (var i = 0; i < arrText.length; i++) {
    var t = arrText[i].toUpperCase();

    if (arrWords.includes(t)){

      t= 'xxx';
      cont++;

      arrText[i] = t;
      console.log('questa è t ',t);
    }

  }
  console.log(arrWords);
  // console.log();

  return arrText.join(' ') + ' '+'ho censurato parole n.' + cont ;


}




// dichiaro var - array testo e array paroleproibite
var txt = prompt('inserisci un testo');
var parole = prompt('inserisci le parole proibite');


console.log(censura(txt, parole));
