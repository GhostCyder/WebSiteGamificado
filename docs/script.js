const quotes = [
    "Água mole em pedra dura, tanto bate até que fura.",
    "Quem não tem cão caça com gato.",
    "Cada macaco no seu galho.",
    "Diz-me com quem andas, dir-te-ei quem és.",
    "Quem conta um conto, acrescenta-lhe um ponto.",
    "A cavalo dado, não se olham os dentes.",
    "Não coloques todos os ovos no mesmo cesto.",
    "No tempo da Maria Cachucha.",
    "Diz o roto ao nu.",
    "Chover a potes.",
    "Nunca mais é sábado.",
    "Tirar o cavalinho da chuva.",
    "Coisas do Arco da Velha.",
    "À grande e à francesa.",
    "Ficar a ver navios.",
    "Quem tem boca vai a Roma.",
    "Como procurar uma agulha num palheiro.",
    "Lágrimas de Crocodilo.",
    "À noite, todos os gatos são pardos.",
    "Olha fds, puta que pariu isto.",
  ];
  
const quoteDisplayElement = document.getElementById('quote');
const textarea = document.getElementById('textarea');
const retryButton = document.getElementById('retryButton');
const newPromptButton = document.getElementById('newPromptButton');
const resultElement = document.getElementById('result');

let startTime, endTime, currentQuote;

function getRandomQuote() {
  return quotes[Math.floor(Math.random() * quotes.length)];
}

function renderQuote() {
  currentQuote = getRandomQuote();
  quoteDisplayElement.innerText = currentQuote;
}

function startTest() {
  renderQuote();
  startTime = new Date();
  document.getElementById('startButton').style.display = 'none';
  document.getElementById('textarea').value = '';
  document.getElementById('result').innerText = '';
  document.getElementById('retryButton').style.display = 'none';
  document.getElementById('newPromptButton').style.display = 'none';
}

function endTest() {
  endTime = new Date();
  const elapsedTime = (endTime - startTime) / 1000; // in seconds
  const typedText = textarea.value.trim();
  const quoteText = currentQuote.trim();

  const words = typedText.split(' ');
  const wordCount = words.filter(word => word !== '').length;

  const timeTaken = elapsedTime.toFixed(2);
  const speed = (wordCount / elapsedTime).toFixed(2);

  resultElement.innerHTML = `Tempo: ${timeTaken} segundos<br>Palavras escritas: ${wordCount}<br>Velocidade de escrita: ${speed} palavras por segundo`;

  retryButton.style.display = 'inline-block';
  newPromptButton.style.display = 'inline-block';
}

document.getElementById('startButton').addEventListener('click', startTest);
document.getElementById('textarea').addEventListener('input', function() {
  const typedText = textarea.value.trim();
  const quoteText = currentQuote.trim();
  if (typedText === quoteText) {
    endTest();
  }
});

retryButton.addEventListener('click', function() {
  document.getElementById('textarea').value = '';
  document.getElementById('result').innerText = '';
  retryButton.style.display = 'none';
  newPromptButton.style.display = 'none';
});

newPromptButton.addEventListener('click', function() {
  startTest();
});

function createConfetti() {
    const confettiContainer = document.getElementById('confetti');
    const colors = ['#f44336', '#9c27b0', '#3f51b5', '#2196f3', '#00bcd4', '#4caf50', '#ffeb3b', '#ff5722'];
    
    for (let i = 0; i < 50; i++) {
      const confetti = document.createElement('div');
      confetti.classList.add('confetti');
      confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
      confetti.style.left = Math.random() * window.innerWidth + 'px';
      confetti.style.animationDuration = Math.random() * 2 + 1 + 's';
      confettiContainer.appendChild(confetti);
      
      setTimeout(() => {
        confetti.remove();
      }, 3000);
    }
  }
  
  
  textarea.addEventListener('input', function() {
    const typedText = textarea.value.trim();
    const quoteText = currentQuote.trim();
    if (typedText === quoteText) {
      endTest();
      createConfetti(); 
    }
  });
  
// JavaScript
// Function to create fireworks animation
function createFireworks() {
    const fireworksContainer = document.getElementById('confetti'); // Use the same container for confetti
    const colors = ['#ffcc00', '#ff6600', '#ff0000', '#ff99ff', '#cc66ff']; // Add your desired colors
  
    for (let i = 0; i < 50; i++) { // Increased number of fireworks particles
      const fireworks = document.createElement('div');
      fireworks.classList.add('fireworks');
      fireworks.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
      fireworks.style.left = Math.random() * window.innerWidth + 'px';
      fireworks.style.top = Math.random() * window.innerHeight + 'px'; // Spread out across the page randomly
      fireworksContainer.appendChild(fireworks);
  
      setTimeout(() => {
        fireworks.remove();
      }, 2000); // Adjust the duration of fireworks as needed
    }
  }
  
  // Check if the typed text matches the quote
  textarea.addEventListener('input', function() {
    const typedText = textarea.value.trim();
    const quoteText = currentQuote.trim();
    if (typedText === quoteText) {
      endTest();
      document.querySelector('.container').classList.add('shaking'); // Add shake animation to container
      createConfetti(); // Trigger confetti animation
      createFireworks(); // Trigger fireworks animation
    }
  });
  