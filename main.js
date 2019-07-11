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
var text = prompt('inserisci un testo');
var testo = [];    //['prova', 'di', ' lungo', 'testo'];
var paroleproibite = ['serie', 'di', 'parole', 'da', 'censurare'];


testo.push(text.split(' ,'));

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


for (var i = 0; i < testo.length; i++) {

  for (var j = 0; j < paroleproibite.length; j++) {

    if (testo[i] === paroleproibite[j]){

      testo[i] = 'xxx';



    }







  }
}
console.log(testo);

console.log(testo.join(' '));
