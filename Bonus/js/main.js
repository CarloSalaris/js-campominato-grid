/* BONUS */

/* Aggiungere una select accanto al bottone di generazione, che fornisca una scelta tra tre diversi livelli di difficoltà:
- con difficoltà 1 => 100 caselle, con un numero compreso tra 1 e 100, divise in 10 caselle per 10 righe;
- con difficoltà 2 => 81 caselle, con un numero compreso tra 1 e 81, divise in 9 caselle per 9 righe;
- con difficoltà 3 => 49 caselle, con un numero compreso tra 1 e 49, divise in 7 caselle per 7 righe; */





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
                const newSpan = document.createElement("span");
                //Lo appendo con il valore "i" del for loop
                newSpan.append(i);
                newSquare.append(newSpan);
    
                //associo l'evento click a ogni nuovo quadrato creato
                newSquare.addEventListener("click",
                    function() {
                        // la cella cliccata si colora di azzurro
                        this.classList.add("blue_bg");
                        // emetto un messaggio in console con il numero della cella cliccata.
                        console.log("the number you selected is: " + i)
                    }
                );

                //"appendo" il quadrato
                gridElement.append(newSquare);
            }           
        }
    );



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