/* BONUS */

/* Aggiungere una select accanto al bottone di generazione, che fornisca una scelta tra tre diversi livelli di difficoltà:
- con difficoltà 1 => 100 caselle, con un numero compreso tra 1 e 100, divise in 10 caselle per 10 righe;
- con difficoltà 2 => 81 caselle, con un numero compreso tra 1 e 81, divise in 9 caselle per 9 righe;
- con difficoltà 3 => 49 caselle, con un numero compreso tra 1 e 49, divise in 7 caselle per 7 righe; */

//stabilisco dimensione quadrato in base al livello selezionato
    /*if (diffLevel === 2){
        newSquare.style.width = ("calc(100% / 9)")
    }else if (diffLevel === 3) {
        newSquare.style.width = ("calc(100% / 7)")
    } */

// squareWidth = "calc(100% / Math.sqrt(maxNum))";
                

// L’utente clicca su un bottone che genererà una griglia di gioco quadrata.
    const gridElement = document.getElementById("grid");
    const startButton = document.getElementById("startGame");

    //gli assegno l'evento "click" per fare apparire la griglia.
    startButton.addEventListener("click", 
        
        function() {

            //Valore relativo al livello di difficoltà
            const diffLevel = document.getElementById("diffLevel").value;
            // console.log(diffLevel);
            
            if (diffLevel == 2){
                startClickFunction(81, "calc(100% / 9)");
                console.log("Hai selezionato il livello medio");
                              
            }else if (diffLevel == 3) {
                startClickFunction(49, "calc(100% / 7)");
                console.log("Hai selezionato il livello difficile");

            }else {
                startClickFunction(100, "calc(100% / 10)");
                console.log("Hai selezionato il livello facile");
            }
        }
    );


/* FUNCTIONS */

//Funzione per far apparire un elemento non visibile
function showHiddenElement(elementName) {
    if (elementName.classList.contains("hide")) {
        elementName.classList.remove("hide");
        elementName.classList.add("show");
    }
};

//Creo una funzione per riprodurre un quadrato
function createGridSquare(tagType, classToAdd, calcWidth) {
    const newElement = document.createElement(tagType)
    newElement.classList.add(classToAdd);
    newElement.style.width = calcWidth;
    return newElement;
};

//Funzione di click
function startClickFunction(maxNum, calcWidth) {
    
    //Svuoto la griglia
    gridElement.innerHTML = "";
    //Mostra griglia nascosta
    showHiddenElement(gridElement);
    //Creo un loop che si ripeta tante volte quante il valore massimo prestabilito
    for (let i = 1; i <= maxNum; i++) {
        
        //Creo una funzione per riprodurre un quadrato (ogni volta)
        const newSquare = createGridSquare("div", "square", calcWidth);

        //"appendo" il quadrato
        gridElement.append(newSquare);
        
        //Creo lo span che andrà in ogni quadrato
        const newSpan = document.createElement("span");
        //Lo appendo con il valore "i" del for loop
        newSpan.innerHTML = i;
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

    }           
};