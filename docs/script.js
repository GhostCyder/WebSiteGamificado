const quotes = [
    "Água mole em pedra dura, tanto bate até que fura.",
    "Quem não tem cão caça com gato.",
    "Cada macaco no seu galho.",
    "Diz-me com quem andas, dir-te-ei quem és.",
    "Quem conta um conto, acrescenta-lhe um ponto.",
    "A cavalo dado, não se olham os dentes.",
    "Não coloques todos os ovos no mesmo cesto."
  ];
  
  const quoteDisplayElement = document.getElementById('quote');
  const textarea = document.getElementById('textarea');
  const startButton = document.getElementById('startButton');
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
    startButton.disabled = true;
    retryButton.style.display = 'none';
    newPromptButton.style.display = 'none';
    textarea.value = '';
    textarea.focus();
    renderQuote();
    startTime = new Date();
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
  
    resultElement.innerHTML = `Time taken: ${timeTaken} seconds<br>Words typed: ${wordCount}<br>Typing speed: ${speed} words per second`;
    
    retryButton.style.display = 'inline-block';
    newPromptButton.style.display = 'inline-block';
  }
  
  startButton.addEventListener('click', startTest);
  textarea.addEventListener('input', function() {
    const typedText = textarea.value.trim();
    const quoteText = currentQuote.trim();
    if (typedText === quoteText) {
      endTest();
    }
  });
  
  retryButton.addEventListener('click', function() {
    startButton.disabled = false;
    retryButton.style.display = 'none';
    newPromptButton.style.display = 'none';
    resultElement.innerHTML = '';
  });
  
  newPromptButton.addEventListener('click', function() {
    startButton.disabled = false;
    retryButton.style.display = 'none';
    newPromptButton.style.display = 'none';
    resultElement.innerHTML = '';
    renderQuote();
  });
  