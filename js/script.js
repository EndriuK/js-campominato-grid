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
