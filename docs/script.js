const quotes = [
    "The quick brown fox jumps over the lazy dog.",
    "Now is the time for all good men to come to the aid of their country.",
    "The only thing we have to fear is fear itself.",
    "In the beginning God created the heavens and the earth.",
    "Ask not what your country can do for you, ask what you can do for your country."
  ];
  
  const quoteDisplayElement = document.getElementById('quote');
  const textarea = document.getElementById('textarea');
  const startButton = document.getElementById('startButton');
  const resultElement = document.getElementById('result');
  
  let startTime, endTime;
  
  function getRandomQuote() {
    return quotes[Math.floor(Math.random() * quotes.length)];
  }
  
  function renderQuote() {
    const quote = getRandomQuote();
    quoteDisplayElement.innerText = quote;
  }
  
  function startTest() {
    startButton.disabled = true;
    textarea.value = '';
    textarea.focus();
    renderQuote();
    startTime = new Date();
  }
  
  function endTest() {
    endTime = new Date();
    const elapsedTime = (endTime - startTime) / 1000; // in seconds
    const typedText = textarea.value.trim();
    const quoteText = quoteDisplayElement.innerText.trim();
  
    const words = typedText.split(' ');
    const wordCount = words.filter(word => word !== '').length;
  
    const timeTaken = elapsedTime.toFixed(2);
    const speed = (wordCount / elapsedTime).toFixed(2);
  
    resultElement.innerHTML = `Time taken: ${timeTaken} seconds<br>Words typed: ${wordCount}<br>Typing speed: ${speed} words per second`;
  
    startButton.disabled = false;
  }
  
  startButton.addEventListener('click', startTest);
  textarea.addEventListener('input', function() {
    const typedText = textarea.value.trim();
    const quoteText = quoteDisplayElement.innerText.trim();
    if (typedText === quoteText) {
      endTest();
    }
  });
  