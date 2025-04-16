// Luca esercizio 1
// 1. Creare un file JS e collegarlo ad un file HTML
/*function clock() {
    let time = new Date();
    let seconds = time.getSeconds();
    let minutes = time.getMinutes();
    let hours = time.getHours();
    let currentTime =` ${hours}:${minutes}:${seconds}`; // qui ci sono le backticks
    console.log(currentTime);
    return currentTime;
  }
  
  let newH2 = document.createElement("h2");
  document.body.appendChild(newH2).textContent = clock();
  document.querySelector("h2").style.color = "blue";
  
  function updateClock() {
    let h2 = document.querySelector("h2");
    h2.innerText = clock();
  }
  setInterval(updateClock, 1000); */


  //luca esercizio 2
 /* 🧮 Consegna Esercizio - Calcolatrice Base in JavaScript (solo JS)
Obiettivo:
Crea una calcolatrice base in JavaScript utilizzando esclusivamente la manipolazione del DOM, senza scrivere codice HTML statico (solo <script> nel file HTML).

✅ Requisiti
Creazione dinamica del DOM:

Crea via JS un contenitore (div.calcolatrice) che includa:

Un display (div o input) per mostrare i numeri e il risultato

I pulsanti numerici (0-9)

I pulsanti delle operazioni (+, −, ×, ÷, =, C)

Funzionalità base:

Mostrare i numeri premuti nel display

Consentire operazioni tra due numeri

Supportare le quattro operazioni base: somma, sottrazione, moltiplicazione e divisione

Pulsante = per ottenere il risultato

Pulsante C per cancellare tutto

Stile base con JS:

Dai un aspetto leggibile alla calcolatrice: sfondo, padding, dimensione dei pulsanti, display in alto, griglia ordinata.

🔒 Restrizioni
❌ Nessun HTML scritto nel file .html (eccetto <script src="script.js">)

❌ Nessun framework o libreria (niente Bootstrap, React, ecc.)

✅ Solo JavaScript vanilla + manipolazione DOM

💡 Suggerimenti
Crea i pulsanti con un array di simboli e un ciclo.

Usa element.addEventListener('click', callback) per associare funzioni.

Per il display puoi usare textContent oppure value se usi un input.

Per valutare un'espressione, puoi usare eval() (solo per questo esercizio, anche se in produzione è sconsigliato!).

📁 Struttura dei file
pgsql
Copia
/calcolatrice-progetto
│
├── index.html     <-- solo include script.js
└── script.js      <-- tutta la logica + DOM    */

