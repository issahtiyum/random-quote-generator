const quotes = [
  "The best way to predict the future is to create it. - Peter Drucker",
  "Do what you can, with what you have, where you are. - Theodore Roosevelt",
  "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
  "Believe you can and you're halfway there. - Theodore Roosevelt",
  "Your time is limited, so don't waste it living someone else's life. - Steve Jobs",
  "If life were predictable it would cease to be life, and be without flavor. - Eleanor Roosevelt",
  "In the middle of every difficulty lies opportunity. - Albert Einstein",
  "The only way to do great work is to love what you do. - Steve Jobs",
  "Happiness is not something ready-made. It comes from your own actions. - Dalai Lama",
  "It does not matter how slowly you go as long as you do not stop. - Confucius"
];

document.querySelector('.quotes-button').addEventListener('click', renderQuoteHTML)

function renderQuote() {
  const randomNumber = Math.floor(Math.random() * quotes.length)
  return quotes[randomNumber]
}

function renderQuoteHTML() {
  document.querySelector('.quotes-container').innerHTML = renderQuote()
}

renderQuoteHTML()