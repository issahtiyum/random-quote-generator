import { quotes, Quote, favorites,} from "./data.js";

let currentQuoteObject;
let generateQuoteButton = document.querySelector('.quotes-button');
let likeButton = document.querySelector(".like-button-container");
const quotesContainer = document.querySelector('.quotes-container');
const tabButtons = document.querySelectorAll('.tab-button')
const tabPanels = document.querySelectorAll('.tab-panel')
const favoritesContainer= document.querySelector('.favorites-container')

tabButtons.forEach((tabButton) => {
  tabButton.addEventListener('click', (event) => {
    event.target.classList.contains('favorites') ? switchTab('favorites') : switchTab('new-quote')
  })
});


generateQuoteButton.addEventListener('click', async () => {
  currentQuoteObject = await renderQuote();
  quotesContainer.innerHTML = `${currentQuoteObject.content} - ${currentQuoteObject.author}`
  likeButton.innerHTML = `<img src="images/${currentQuoteObject.isFavorite ? 'full-heart' : 'empty-heart'}.png" alt="like-button" class="like-button">`
})

likeButton.addEventListener('click', () => {
  currentQuoteObject.toggleLike()
  likeButton.innerHTML = `<img src="images/${currentQuoteObject.isFavorite ? 'full-heart' : 'empty-heart'}.png" alt="like-button" class="like-button">`
})

favoritesContainer.addEventListener('click', (event) => {
  if (event.target.classList.contains('back-to-new-quotes')){
    switchTab('new-quote')
    return
  }
  else if (event.target.getAttribute('data-index')) {
    const index = event.target.getAttribute('data-index')
    const quoteToRemove = favorites[index]
    quoteToRemove.removeFromFavorites(favorites, index)
    favoritesContainer.innerHTML = renderFavorites(favorites);
  
    if (
      currentQuoteObject &&
      currentQuoteObject.content === quoteToRemove.content &&
      currentQuoteObject.author === quoteToRemove.author
    ) {
      likeButton.innerHTML = `<img src="images/empty-heart.png" alt="like-button" class="like-button">`;
    }
  
    return;
  }

})

function switchTab(tabButtonName) {
  tabButtons.forEach((button) =>
    button.classList.toggle("active", button.classList.contains(tabButtonName))
  );

  tabPanels.forEach((panel) =>
    panel.classList.toggle("active", panel.classList.contains(`${tabButtonName}-container`))
  );

  if (tabButtonName === 'favorites') {
    favoritesContainer.innerHTML = renderFavorites(favorites); 
  }
}

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
    return `<div class="no-favorite-message">You have no favorite quotes</div> 
  <div class="back-to-new-quotes-button">
    <button class="primary-button back-to-new-quotes">Back to New Quotes</button>
  </div>
`
  }
  let favoritesContainer = ''  
  favorites.forEach((favoriteQuote, index) => {
      favoritesContainer += `<div class="favorite-quote-container">
  <div class="favorite-quote">
    ${favoriteQuote.content} - ${favoriteQuote.author}
  </div>
  <div class="delete-button-container">
    <img src="images/trash-can.png" alt="delete-button" class="delete-button" data-index="${index}">
  </div>
</div>
  `
})
  return favoritesContainer
}