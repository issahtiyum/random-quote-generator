import { quotes, Quote, favorites } from "./data.js";

let currentQuoteObject;
const generateQuoteButton = document.querySelector('.quotes-button');
const likeButton = document.querySelector(".like-button-container");
const quotesContainer = document.querySelector('.quotes-container');

generateQuoteButton.addEventListener('click', async () => {
  currentQuoteObject = await renderQuote();
  quotesContainer.innerHTML = `${currentQuoteObject.content} - ${currentQuoteObject.author}`
  likeButton.innerHTML = `<img src="images/empty-heart.png" alt="like-button" class="like-button">`

  favorites.forEach((favoriteQuote) => {
    if (currentQuoteObject.content == favoriteQuote.content && currentQuoteObject.author == favoriteQuote.author) {
      likeButton.innerHTML = `<img src="images/full-heart.png" alt="like-button" class="like-button">`
      currentQuoteObject.isFavorite = true;
    }
  })
})

likeButton.addEventListener('click', () => {
  currentQuoteObject.toggleLike()
  if (currentQuoteObject.isFavorite){
    likeButton.innerHTML = `<img src="images/full-heart.png" alt="like-button" class="like-button">`
  } else {
    likeButton.innerHTML = `<img src="images/empty-heart.png" alt="like-button" class="like-button">`
  }
  console.log(favorites)
})

async function renderQuote() {
  const APIQuote = await fetchQuote()
  if(!APIQuote.errorMessage){
    return new Quote(APIQuote)
  }
  const randomIndex = Math.floor(Math.random() * quotes.length)
  return quotes[randomIndex]
}

async function fetchQuote(){
  try{
    const quote = await fetch("http://api.quotable.io/random")
    if(quote.status >= 400){
      const errorObject = await quote.json(); 
      throw new Error(errorObject.message || 'Unexpected error');   
    }
    const quoteObject = await quote.json()
    return quoteObject
  }
    catch(error){
      console.error("Error fetching quote:", error.message);
      return {errorMessage: error.message};
  }
}