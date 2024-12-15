import { quotes, Quote, favorites,} from "./data.js";

let currentQuoteObject;
let generateQuoteButton = document.querySelector('.quotes-button');
let likeButton = document.querySelector(".like-button-container");
const quotesContainer = document.querySelector('.quotes-container');
const favoritesTabButton = document.querySelector('.favorites');
const contentContainer = document.querySelector('.content-container');
const generateTabButton = document.querySelector('.new-quote');

favoritesTabButton.addEventListener('click', () => {
  contentContainer.innerHTML = renderFavorites(favorites)
  contentContainer.classList.replace('generate-new-quote-container', 'favorites-container')
})

generateTabButton.addEventListener('click', () => {
  contentContainer.innerHTML =  renderQuoteTab(currentQuoteObject)
  generateQuoteButton = document.querySelector('.quotes-button');
  likeButton = document.querySelector(".like-button-container");
  contentContainer.classList.remove('no-favorites')
  contentContainer.classList.replace('favorites-container', 'generate-new-quote-container')
})




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

function renderFavorites(favorites) {
  if (!favorites.length) {
    contentContainer.classList.add('no-favorites')
    return `<div class="no-favorite-message">You have no favorite quotes</div> 
  <div class="back-to-new-quotes-button">
    <button class="primary-button">Back to New Quotes</button>
  </div>
`
  }
  let favoritesContainer = ''  
    favorites.forEach((favoriteQuote) => {
      favoritesContainer += `<p class="favorite-quote">
  ${favoriteQuote.content} - ${favoriteQuote.author}
</p>
`})
  return favoritesContainer
}

function renderQuoteTab(currentQuoteObject){
  return `<div class="quotes-container">${currentQuoteObject ? `${currentQuoteObject.content} - ${currentQuoteObject.author}` : "Click on 'Generate' to get your quote to inspire you today!"}</div>
  <div class="interaction-container">
    <button class="quotes-button primary-button">Generate</button>
    <div class="like-button-container">
    </div>
  </div>
  `
}