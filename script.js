// Creazione del contenitore principale
const container = document.createElement('div');
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
setInterval(updateClock, 1000);
