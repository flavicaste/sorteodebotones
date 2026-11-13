// Elementos del DOM
const btnRed = document.getElementById('btnRed');
const btnBlue = document.getElementById('btnBlue');
const resultContainer = document.getElementById('resultContainer');
const resultMessage = document.getElementById('resultMessage');
const btnReset = document.getElementById('btnReset');

// Posibles resultados
const OUTCOMES = [
  { text: '¡Has ganado!', isWin: true },
  { text: '¡Has perdido!', isWin: false }
];

// Función para jugar una ronda
function playRound() {
  // Deshabilitar los botones para evitar clics repetidos
  btnRed.disabled = true;
  btnBlue.disabled = true;

  // Seleccionar resultado aleatorio
  const randomIndex = Math.floor(Math.random() * OUTCOMES.length);
  const outcome = OUTCOMES[randomIndex];

  // Configurar mensaje y estilos
  resultMessage.textContent = outcome.text;
  resultMessage.className = 'result-message ' + (outcome.isWin ? 'win' : 'lose');

  // Mostrar el contenedor de resultado y botón de reinicio
  resultContainer.classList.remove('hidden');
}

// Función para reiniciar el juego
function resetGame() {
  // Habilitar nuevamente los botones de elección
  btnRed.disabled = false;
  btnBlue.disabled = false;

  // Ocultar y limpiar resultado
  resultContainer.classList.add('hidden');
  resultMessage.textContent = '';
  resultMessage.className = 'result-message';
}

// Escuchadores de eventos
btnRed.addEventListener('click', playRound);
btnBlue.addEventListener('click', playRound);
btnReset.addEventListener('click', resetGame);
