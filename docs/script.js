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
  "Quem não arrisca, não petisca.",
  "Quem tudo quer, tudo perde.",
  "A ocasião faz o ladrão.",
  "Quem espera sempre alcança.",
  "Deitar cedo e cedo erguer, dá saúde e faz crescer.",
  "Cada macaco no seu galho.",
  "A pressa é inimiga da perfeição.",
  "Quem não tem dinheiro não tem vícios.",
  "A mentira tem perna curta.",
  "O que é fácil de mais, não interessa.",
  "Devagar se vai ao longe.",
  "Quem não arrisca, não petisca.",
  "Quem cedo madruga, Deus ajuda.",
  "Cavalo dado não se olha os dentes.",
  "Quem com ferro fere, com ferro será ferido.",
  "Deus ajuda a quem cedo madruga.",
  "Em terra de cego, quem tem um olho é rei.",
  "Quem espera desespera.",
  "Mais vale um pássaro na mão do que dois a voar.",
  "Quem vê caras não vê corações.",
  "Amigos, amigos, negócios à parte.",
  "Não há rosas sem espinhos.",
  "Mais vale tarde do que nunca.",
  "A união faz a força.",
  "O barato sai caro.",
  "Quem ri por último, ri melhor.",
  "Não há mal que sempre dure, nem bem que nunca acabe.",
  "Longe da vista, longe do coração.",
  "Nem tudo o que reluz é ouro.",
  "Antes só do que mal acompanhado.",
  "Cão que ladra não morde.",
  "Quem semeia ventos, colhe tempestades.",
  "Casa de ferreiro, espeto de pau.",
  "Mente sã, corpo são."
];


let usedQuotes = [];

function getRandomQuote() {
  if (quotes.length === 0) {
      quotes.push(...usedQuotes);
      usedQuotes = [];
  }
  const index = Math.floor(Math.random() * quotes.length);
  const quote = quotes[index];
  quotes.splice(index, 1);
  usedQuotes.push(quote);
  return quote;
}

const quoteDisplayElement = document.getElementById('quote');
const textarea = document.getElementById('textarea');
const resultElement = document.getElementById('result');
const startButton = document.getElementById('startButton');

let startTime, endTime, currentQuote;

function renderQuote() {
  currentQuote = getRandomQuote();
  quoteDisplayElement.innerText = currentQuote;
}

function startTest() {
  renderQuote();
  startTime = new Date();
  textarea.value = '';
  resultElement.innerText = '';
  startButton.style.display = 'none'; // Hide the start button after it's pressed
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

  setTimeout(startTest, 2000); // Start a new test after a delay of 2 seconds
}

startButton.addEventListener('click', startTest);

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

textarea.addEventListener('input', function() {
  const typedText = textarea.value;
  const quoteText = currentQuote;

  let html = '';
  for (let i = 0; i < quoteText.length; i++) {
      const typedChar = typedText[i];
      const quoteChar = quoteText[i];

      if (typedChar === undefined) {
          html += '<span>' + quoteChar + '</span>';
      } else if (typedChar === quoteChar) {
          html += '<span style="color: green; font-weight: bold;">' + typedChar + '</span>';
      } else {
          html += '<span style="color: red; font-weight: bold;">' + typedChar + '</span>';
      }
  }

  quoteDisplayElement.innerHTML = html;

  // Check if typed text matches the quote
  if (typedText === quoteText) {
      if (typedText.length > 0) {
          endTest();
          document.querySelector('.container').classList.add('shaking'); // Add shake animation to container
          createConfetti(); // Trigger confetti animation
          createFireworks(); // Trigger fireworks animation
      }
  }
});
