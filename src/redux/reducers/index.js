// qui dentro scrivo il reducer per la mia app

// anche redux, come lo stato di un singolo componente, ha bisogno di un valore
// iniziale per il suo stato

const initialState = {
  // cercate di organizzare il vostro stato di redux in "slices"
  // ovvero sotto-oggetti
  cart: {
    content: [], // l'array di libri attualmente nel carrello
  },
}

// = initialState significa che initialState è il valore di DEFAULT di state
// quando initialState sarà undefined (al primo avvio) noi gli diamo il valore iniziale
const mainReducer = (state = initialState, action) => {
  // parametro 1 -> state è lo stato corrente di redux
  // parametro 2 -> action è l'azione che è stata appena "dispatchata"
  //
  // ora il cuore del reducer: lo switch-case
  switch (action.type) {
    // qui vanno i case
    default: {
      // il default cattura tutti i casi che NON sono rientrati
      // nei precedenti switch case

      // TUTTI gli switch case del mio mainReducer hanno UN solo scopo:
      // RITORNARE il nuovo stato di redux
      return state
      // worst-case-scenario: ritorno lo stato senza alterarlo
    }
  }
}

export default mainReducer
