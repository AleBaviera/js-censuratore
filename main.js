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




function censura(text, words){   // funzione che riceve due stringhe come argomenti
                                      // restituisce stringa censored e num parole censored
  var cont = 0;
  var arrText = text.split(' ');
  var arrWords = words.split(' ');
 console.log(' nella funzione gli array',arrText, arrWords);
  for (var i = 0; i < arrText.length; i++) {


    if (arrWords.includes(arrText[i])){

      arrText[i]= 'xxx';
      cont++;
      // console.log(arrText[i]);
    }

  }
  console.log(arrWords);
  // console.log();
  return arrText.join(' ')+'ho censurato parole n.' + cont ;


}


// dichiaro var - array testo e array paroleproibite
var txt = prompt('inserisci un testo');
var parole = prompt('inserisci le parole proibite');


console.log(censura(txt, parole));
