// definizione della funzione che mi crea i quadrati della griglia
function createSquare(value) {
  let currentElement = document.createElement("div");
  // metto il numero progressivo
  currentElement.innerText = value + 1;
  // assegnazione della classe square all'elemento
  currentElement.classList.add("square");
  // restituisco il quadrato contenuto della variabile currentElement
  return currentElement;
}

// recupero pulsante dal dom
const btn = document.getElementById("start");

// recupero l'elemento che conterrà la mia griglia
const grid = document.getElementById("grid");

//creo funzione bottone per lo start
btn.addEventListener("click", function () {
  //eseguo ciclo di 100 iterazione per creare la griglia 10x10
  for (let i = 0; i < 100; i++) {
    //creo il singolo quadrato chiamando la funzione createSquare
    let createSquare = createSquare(i);
  }
});
