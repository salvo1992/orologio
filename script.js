
// Esercizio 1: Orologio Digitale
// Creazione del contenitore principale
/*const container = document.createElement('div');
container.style.display = 'flex';
container.style.justifyContent = 'center';
container.style.alignItems = 'center';
container.style.height = '100vh';
container.style.backgroundColor = '#222';

// Creazione del testo dell'orologio
const clock = document.createElement('h1');
clock.style.fontFamily = 'Arial, sans-serif';
clock.style.fontSize = '4rem';
clock.style.color = '#00FFAA';

// Funzione per ottenere l'ora formattata
function getFormattedTime() {
  const now = new Date();
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const seconds = String(now.getSeconds()).padStart(2, '0');
  return `${hours}:${minutes}:${seconds}`;
}

// Funzione per aggiornare l'orologio ogni secondo
function updateClock() {
  clock.textContent = getFormattedTime();
}

// Aggiunta dell'orologio al contenitore e al body
container.appendChild(clock);
document.body.appendChild(container);

// Aggiorna subito e poi ogni secondo
updateClock();
setInterval(updateClock, 1000);*/
 

//eserrcizio 2
  

// Crea il contenitore principale
const container = document.createElement('div');
container.style.maxWidth = '300px';
container.style.margin = '50px auto';
container.style.padding = '20px';
container.style.borderRadius = '10px';
container.style.backgroundColor = '#f4f4f4';
container.style.boxShadow = '0 0 10px rgba(0,0,0,0.2)';
container.style.fontFamily = 'Arial';
container.style.textAlign = 'center';

// Crea il display
const display = document.createElement('input');
display.type = 'text';
display.disabled = true;
display.style.width = '100%';
display.style.fontSize = '2rem';
display.style.textAlign = 'right';
display.style.marginBottom = '15px';
display.style.padding = '10px';
display.style.border = '2px solid #ccc';
display.style.borderRadius = '5px';
container.appendChild(display);

// Crea una griglia per i pulsanti
const buttonGrid = document.createElement('div');
buttonGrid.style.display = 'grid';
buttonGrid.style.gridTemplateColumns = 'repeat(4, 1fr)';
buttonGrid.style.gap = '10px';
container.appendChild(buttonGrid);

// Simboli dei pulsanti
const buttons = [
  '7', '8', '9', '÷',
  '4', '5', '6', '×',
  '1', '2', '3', '−',
  'C', '0', '=', '+'
];

// Funzione per creare e gestire i pulsanti
let currentExpression = '';

buttons.forEach(symbol => {
  const btn = document.createElement('button');
  btn.textContent = symbol;
  btn.style.padding = '20px';
  btn.style.fontSize = '1.5rem';
  btn.style.border = 'none';
  btn.style.borderRadius = '5px';
  btn.style.cursor = 'pointer';
  btn.style.backgroundColor = '#e0e0e0';

  // Azioni su click
  btn.addEventListener('click', () => {
    if (symbol === 'C') {
      currentExpression = '';
      display.value = '';
    } else if (symbol === '=') {
      try {
        const replacedExpr = currentExpression
          .replace(/÷/g, '/')
          .replace(/×/g, '*')
          .replace(/−/g, '-');

        const result = eval(replacedExpr); // SOLO PER ESERCIZIO
        display.value = result;
        currentExpression = result.toString();
      } catch {
        display.value = 'Errore';
        currentExpression = '';
      }
    } else {
      currentExpression += symbol;
      display.value = currentExpression;
    }
  });

  buttonGrid.appendChild(btn);
});

// Aggiungi tutto al body
document.body.appendChild(container);
