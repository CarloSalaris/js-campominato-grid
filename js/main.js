
/* Consegna */

// L’utente clicca su un bottone che genererà una griglia di gioco quadrata.
    //Seleziono la griglia
    const gridElement = document.getElementById("grid");
    //Seleziono il button
    const startButton = document.getElementById("startGame");
    //gli assegno l'evento "click" per fare apparire la griglia.
    startButton.addEventListener("click",

        function() {
            //Mostra griglia nascosta
            showHiddenElement(gridElement);
            //Creo un loop che si ripeta tante volte quante il valore massimo prestabilito
            for (let i = 1; i <= 100; i++) {
                //Creo una funzione per riprodurre un quadrato (ogni volta)
            const newSquare = createGridSquare("div", "square");


            // Ogni cella ha un numero progressivo, da 1 a 100 (Ci saranno quindi 10 caselle per ognuna delle 10 righe.)
                //Creo lo span che andrà in ogni quadrato
                //Lo appendo con il valore "i" del for loop

            gridElement.append(newSquare);
            }           
        }
    );

        

// Quando l’utente clicca su ogni cella:
    // la cella cliccata si colora di azzurro
    // emetto un messaggio in console con il numero della cella cliccata.
        //associo l'evento click a ogni nuovo quadrato creato
            //Con il click associo la classe colore


/* FUNCTIONS */

//Funzione per far apparire un elemento non visibile
function showHiddenElement(elementName) {
    elementName.classList.remove("hide");
    elementName.classList.add("show");
}

//Creo una funzione per riprodurre un quadrato
function createGridSquare(tagType, classToAdd) {
    const newElement = document.createElement(tagType)
    newElement.classList.add(classToAdd);
    return newElement;
}